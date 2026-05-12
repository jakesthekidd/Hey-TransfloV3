/**
 * NLU Service - Natural Language Understanding
 * Processes transcripts to extract intents and entities
 */

export interface IntentResult {
  intent: string;
  entities: Record<string, any>;
  confidence: number;
  originalText: string;
}

export interface ExtractedMessage {
  message: string;
  fleetId?: string;
}

/**
 * NLU Service for intent classification and entity extraction
 * Uses pattern matching and keyword detection (can be replaced with ML model later)
 */
export class NLUService {
  /**
   * Process transcript and extract intent and entities
   */
  async processIntent(transcript: string): Promise<IntentResult> {
    const normalizedText = transcript.toLowerCase().trim();
    
    // Intent classification with confidence scoring
    const intentResult = this.classifyIntent(normalizedText, transcript);
    
    return intentResult;
  }

  /**
   * Classify intent based on keywords and patterns
   */
  private classifyIntent(normalizedText: string, originalText: string): IntentResult {
    // Intent patterns with confidence scores
    const intentPatterns = [
      {
        intent: 'send_message',
        patterns: [
          /send.*message/i,
          /tell.*dispatch/i,
          /message.*dispatcher/i,
          /send.*to.*fleet/i,
          /notify.*dispatch/i,
          /send.*dispatch/i,
        ],
        confidence: 0.9,
      },
      {
        intent: 'check_eta',
        patterns: [
          /what.*eta/i,
          /when.*arrive/i,
          /how.*long.*until/i,
          /estimated.*time/i,
          /time.*arrival/i,
          /eta/i,
        ],
        confidence: 0.9,
      },
      {
        intent: 'load_summary',
        patterns: [
          /load.*summary/i,
          /tell.*about.*load/i,
          /what.*hauling/i,
          /load.*details/i,
          /load.*info/i,
          /what.*load/i,
        ],
        confidence: 0.85,
      },
      {
        intent: 'hos_status',
        patterns: [
          /hours.*service/i,
          /hos.*status/i,
          /how.*much.*time/i,
          /time.*left/i,
          /driving.*time/i,
          /rest.*time/i,
          /duty.*status/i,
        ],
        confidence: 0.9,
      },
      {
        intent: 'weigh_station',
        patterns: [
          /weigh.*station/i,
          /how.*far.*weigh/i,
          /next.*weigh/i,
          /weigh.*distance/i,
          /scale.*station/i,
        ],
        confidence: 0.85,
      },
      {
        intent: 'certify_logs',
        patterns: [
          /certify.*log/i,
          /certify.*hours/i,
          /sign.*log/i,
          /certify.*eld/i,
          /approve.*log/i,
        ],
        confidence: 0.9,
      },
    ];

    // Find matching intent
    let bestMatch: { intent: string; confidence: number } | null = null;

    for (const pattern of intentPatterns) {
      for (const regex of pattern.patterns) {
        if (regex.test(normalizedText)) {
          if (!bestMatch || pattern.confidence > bestMatch.confidence) {
            bestMatch = {
              intent: pattern.intent,
              confidence: pattern.confidence,
            };
          }
        }
      }
    }

    // If no intent found, return out of scope
    if (!bestMatch) {
      return {
        intent: 'out_of_scope',
        entities: {},
        confidence: 0.3,
        originalText,
      };
    }

    // Extract entities based on intent
    const entities = this.extractEntities(bestMatch.intent, normalizedText, originalText);

    return {
      intent: bestMatch.intent,
      entities,
      confidence: bestMatch.confidence,
      originalText,
    };
  }

  /**
   * Extract entities from transcript based on intent
   */
  private extractEntities(
    intent: string,
    normalizedText: string,
    originalText: string
  ): Record<string, any> {
    const entities: Record<string, any> = {};

    switch (intent) {
      case 'send_message':
        // Extract message content
        // Remove command phrases to get the actual message
        const messagePatterns = [
          /send.*message[:\s]*(.+)/i,
          /tell.*dispatch[:\s]*(.+)/i,
          /message.*dispatcher[:\s]*(.+)/i,
          /send.*to.*fleet[:\s]*(.+)/i,
          /notify.*dispatch[:\s]*(.+)/i,
        ];

        let message = originalText;
        for (const pattern of messagePatterns) {
          const match = originalText.match(pattern);
          if (match && match[1]) {
            message = match[1].trim();
            break;
          }
        }

        // If no pattern matched, try to extract after common phrases
        if (message === originalText) {
          const afterPhrases = [
            /(?:send|tell|say|message|notify).*?(?:that|to|dispatch|fleet).*?[:\s]+(.+)/i,
          ];
          for (const pattern of afterPhrases) {
            const match = originalText.match(pattern);
            if (match && match[1]) {
              message = match[1].trim();
              break;
            }
          }
        }

        // If still no match, use the full text but remove obvious command words
        if (message === originalText) {
          message = originalText
            .replace(/^(send|tell|message|notify).*?(dispatch|fleet|dispatcher)/i, '')
            .trim();
        }

        entities.message = message || originalText;

        // Extract fleet ID if mentioned
        const fleetPattern = /(?:fleet|to)\s*(?:id|number)?\s*([A-Z0-9]+)/i;
        const fleetMatch = originalText.match(fleetPattern);
        if (fleetMatch && fleetMatch[1]) {
          entities.fleetId = fleetMatch[1].toUpperCase();
        }

        break;

      case 'check_eta':
        // Could extract destination or route if mentioned
        const destinationPattern = /(?:to|at|in)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/;
        const destMatch = originalText.match(destinationPattern);
        if (destMatch && destMatch[1]) {
          entities.destination = destMatch[1];
        }
        break;

      case 'load_summary':
        // Could extract specific load details if asked
        const detailPattern = /(?:what|tell|show).*?(?:about|details|info).*?(?:load|shipment)/i;
        if (detailPattern.test(normalizedText)) {
          entities.detailType = 'full';
        }
        break;

      case 'hos_status':
        // Could extract specific HOS question type
        if (/time.*left/i.test(normalizedText)) {
          entities.questionType = 'time_remaining';
        } else if (/legal/i.test(normalizedText)) {
          entities.questionType = 'legal_status';
        } else if (/violation/i.test(normalizedText)) {
          entities.questionType = 'violations';
        }
        break;

      case 'weigh_station':
        // Could extract direction or route
        const directionPattern = /(?:on|heading|toward).*?([A-Z0-9]+(?:\s+[A-Z0-9]+)*)/i;
        const dirMatch = originalText.match(directionPattern);
        if (dirMatch && dirMatch[1]) {
          entities.route = dirMatch[1];
        }
        break;
    }

    return entities;
  }

  /**
   * Extract message content from send_message intent
   */
  extractMessage(transcript: string): ExtractedMessage {
    const result = this.classifyIntent(transcript.toLowerCase(), transcript);
    
    if (result.intent === 'send_message') {
      return {
        message: result.entities.message || transcript,
        fleetId: result.entities.fleetId,
      };
    }

    return {
      message: transcript,
    };
  }

  /**
   * Check if transcript matches a quick action
   */
  matchesQuickAction(transcript: string, quickAction: string): boolean {
    const normalized = transcript.toLowerCase();
    const action = quickAction.toLowerCase();

    // Direct match
    if (normalized.includes(action)) {
      return true;
    }

    // Partial matches for common variations
    const actionMap: Record<string, string[]> = {
      "what's my eta": ['eta', 'arrival', 'time', 'when'],
      "what's my hos status": ['hos', 'hours', 'service', 'time left'],
      "how far till the weigh-station": ['weigh', 'station', 'scale', 'distance'],
      "certify logs": ['certify', 'log', 'sign', 'approve'],
      "load summary": ['load', 'summary', 'details', 'info'],
    };

    const variations = actionMap[action];
    if (variations) {
      return variations.some(v => normalized.includes(v));
    }

    return false;
  }
}
