# Hey Transflo Voice Agent - Technical Integration Guide

## 📋 Overview

This document provides comprehensive technical documentation for integrating real voice AI capabilities into the "Hey Transflo" voice agent. The current implementation is a **high-fidelity UI prototype** with mock voice interactions. This guide will help you add actual voice recognition, natural language processing, and text-to-speech capabilities.

---

## 🛠 Technology Stack

### **Core Framework**
- **React 18+** with TypeScript
- **Vite** as build tool
- **Tailwind CSS v4** for styling

### **Animation & Motion**
- **Motion (motion/react)** - formerly Framer Motion
  - Import: `import { motion, AnimatePresence } from 'motion/react'`
  - Used for all fluid animations, transitions, and physics-based motion
  - Critical for the "liquid intelligence" visual aesthetic

### **UI Components**
- **Lucide React** for icons
- **Figma Imports** - Pre-built components from design system:
  - `Widgets` - Load summary widget
  - `Hos` - Hours of Service display
  - `HosPage` - HOS detailed page
  - `ETAWidget` - Custom ETA display component

### **State Management**
- **React Hooks** (useState, useEffect)
- No external state management library - all state is local to VoiceAgent component

---

## 📂 File Structure

```
/components/
  ├── VoiceAgent.tsx          ← MAIN FILE - All voice agent logic
  ├── ETAWidget.tsx           ← ETA display component
  ├── FleetProfileMenu.tsx    ← Fleet selector menu
  └── WordByWordText.tsx      ← Text animation component

/imports/
  ├── Widgets.tsx             ← Load summary Figma component
  ├── Hos-2046-1880.tsx       ← HOS status Figma component
  └── HosPage-2051-2980.tsx   ← HOS page Figma component

/App.tsx                      ← Main dashboard that triggers voice agent
```

---

## 🎯 VoiceAgent Component Architecture

### **Location**: `/components/VoiceAgent.tsx`

### **Component Props**
```typescript
interface VoiceAgentProps {
  isOpen: boolean;                    // Controls visibility of voice agent overlay
  onClose: (completedAction?: string) => void;  // Callback when agent closes
  tapPosition?: { x: number; y: number };       // Animation origin point
}
```

### **Conversation Stages** (State Machine)

The voice agent uses a **finite state machine** with these stages:

```typescript
type ConversationStage = 
  | 'listening'      // Initial state - waiting for voice input
  | 'transcribing'   // Converting speech to text (word-by-word animation)
  | 'thinking'       // Processing user intent with NLU
  | 'confirming'     // Showing confirmation for "send message" action
  | 'sending'        // Executing the send action
  | 'sent'           // Success state after sending
  | 'loadSummary'    // Showing load information widget
  | 'eta'            // Showing ETA widget with Q&A
  | 'hos'            // Showing Hours of Service status
  | 'weighStation'   // Showing next weigh station distance
  | 'certifyLogs'    // HOS log certification flow
  | 'outOfScope'     // Handling unsupported requests
  | 'error'          // Error state for failed operations
  | 'timeout';       // No voice detected timeout (15 seconds)
```

---

## 🔄 Current Mock Flow (What Needs Real Voice API)

### **Stage 1: LISTENING**
**Current Behavior:**
- Shows animated microphone orb
- Displays "Tap to speak or use quick actions below" text
- Has animated voice amplitude bars (purely visual)
- User must **TAP the microphone orb** to start

**🔌 INTEGRATION NEEDED:**
```javascript
// Location: Line ~119 - handleListeningTap function
const handleListeningTap = (e: React.MouseEvent) => {
  e.stopPropagation();
  if (stage === 'listening' && !showFleetSelector) {
    setHasInteracted(true);
    
    // ⚠️ TODO: START REAL VOICE RECORDING HERE
    // Example:
    // await startVoiceRecognition();
    
    setStage('transcribing');
    // Timers below should be replaced with real API callbacks
    setTimeout(() => { setStage('thinking'); }, 3500);
    setTimeout(() => {
      const shouldShowOutOfScope = Math.random() < 0.20;
      if (shouldShowOutOfScope) {
        setStage('outOfScope');
      } else {
        setStage('confirming');
      }
    }, 5000);
  }
};
```

**Voice Recognition Setup Required:**
1. Initialize microphone access: `navigator.mediaDevices.getUserMedia({ audio: true })`
2. Start streaming audio to voice recognition service
3. Setup real-time amplitude detection for visual feedback

**Recommended APIs:**
- **Web Speech API** (Browser native - free but limited)
- **OpenAI Whisper API** (High accuracy, multilingual)
- **Google Cloud Speech-to-Text** (Real-time streaming)
- **Azure Speech Services** (Optimized for automotive/noisy environments)

---

### **Stage 2: TRANSCRIBING**
**Current Behavior:**
- Shows progressive word-by-word text animation
- Mock transcript: `"Hey, Umm Send a message. I will be there in 45 minutes"`
- Uses `transcriptProgress` state (0-100) for animation

**🔌 INTEGRATION NEEDED:**
```javascript
// Location: Line ~44 - mockTranscript constant
const mockTranscript = "Hey, Umm Send a message. I will be there in 45 minutes";

// ⚠️ TODO: REPLACE WITH REAL TRANSCRIPT
// Listen to voice recognition results:
// onTranscriptUpdate((partialText) => {
//   setRealTimeTranscript(partialText);
// });

// Location: Line ~50-63 - getProgressiveTranscript function
// This creates the word-by-word effect
// You can keep this visual logic, just feed it real transcript data
```

**Real-time Transcript Integration:**
1. Replace `mockTranscript` with state variable `[liveTranscript, setLiveTranscript]`
2. Update transcript as words arrive from speech recognition
3. Keep the progressive animation logic for visual polish

**Voice Amplitude Animation:**
```javascript
// Location: Line ~82-88 - Voice amplitude simulation
// ⚠️ TODO: REPLACE WITH REAL AUDIO AMPLITUDE
// Use Web Audio API to get real-time volume:
// const analyser = audioContext.createAnalyser();
// analyser.getByteFrequencyData(dataArray);
// const amplitude = Math.max(...dataArray) / 255;
// setVoiceAmplitude(amplitude);
```

---

### **Stage 3: THINKING**
**Current Behavior:**
- Shows rotating dotted circle animation
- Displays "Got it. One moment..." text
- Fixed 1.5 second delay (mock processing)

**🔌 INTEGRATION NEEDED:**
```javascript
// Location: Line ~125-130 - Inside handleListeningTap
// setTimeout(() => { setStage('thinking'); }, 3500);

// ⚠️ TODO: REPLACE WITH NLU PROCESSING
// 1. Send final transcript to NLU service
// 2. Determine user intent
// 3. Extract entities (e.g., message content, recipient)
// 4. Transition to appropriate stage based on intent

// Example NLU processing:
async function processIntent(transcript: string) {
  const result = await nlpAPI.analyze(transcript);
  
  if (result.intent === 'send_message') {
    setExtractedMessage(result.entities.message);
    setStage('confirming');
  } else if (result.intent === 'check_eta') {
    setStage('eta');
  } else if (result.intent === 'load_summary') {
    setStage('loadSummary');
  } else if (result.intent === 'hos_status') {
    setStage('hos');
  } else if (result.intent === 'weigh_station') {
    setStage('weighStation');
  } else if (result.intent === 'certify_logs') {
    setStage('certifyLogs');
  } else {
    setStage('outOfScope');
  }
}
```

**Intent Classification Map:**
```typescript
// Supported intents and example utterances:
const INTENT_MAP = {
  send_message: [
    "send a message",
    "tell dispatch",
    "message my dispatcher",
    "send to fleet"
  ],
  check_eta: [
    "what's my ETA",
    "when will I arrive",
    "how long until I get there"
  ],
  load_summary: [
    "load summary",
    "tell me about my load",
    "what am I hauling"
  ],
  hos_status: [
    "hours of service",
    "how much time do I have",
    "HOS status"
  ],
  weigh_station: [
    "next weigh station",
    "how far to weigh station",
    "weigh station distance"
  ],
  certify_logs: [
    "certify logs",
    "certify my hours",
    "sign off on logs"
  ]
};
```

**Recommended NLU APIs:**
- **OpenAI GPT-4** with function calling (most flexible)
- **Dialogflow** (Google - good for automotive)
- **Amazon Lex** (AWS - integrates with trucking systems)
- **Custom fine-tuned model** for trucking-specific terminology

---

### **Stage 4: CONFIRMING** (Send Message Flow)
**Current Behavior:**
- Shows message confirmation card with mock data
- Mock message: `"I'll Be there in 45 Minutes"`
- Shows fleet ID selector
- Displays small voice listening indicator at bottom
- User can say "Send" or "Cancel" OR tap buttons

**🔌 INTEGRATION NEEDED:**
```javascript
// Location: Line ~1000-1098 - Message card display
// ⚠️ TODO: REPLACE MOCK MESSAGE WITH EXTRACTED ENTITY
// const mockMessage = "I will be there in 45 minutes.";

// Store extracted message in state:
const [extractedMessage, setExtractedMessage] = useState('');

// During confirming stage, show extracted message:
<p className="text-[#e9f1f8]">
  {extractedMessage || "I'll Be there in 45 Minutes"}
</p>

// ⚠️ VOICE COMMAND LISTENING
// During 'confirming' stage, keep listening for "Send" or "Cancel"
// Example:
// if (stage === 'confirming') {
//   startCommandRecognition(['send', 'cancel'], (command) => {
//     if (command === 'send') handleSend();
//     if (command === 'cancel') onClose();
//   });
// }
```

**Fleet ID Selection:**
```javascript
// Location: Line ~32 - FLEET_IDS constant
const FLEET_IDS = ['DEMO1', 'DEMO2', 'DEMO3'];

// ⚠️ TODO: REPLACE WITH REAL FLEET IDs FROM API
// Fetch from backend:
// const fleetIds = await fetchUserFleetIds();

// Voice command for fleet selection:
// "Change to DEMO2" → handleSelectFleet('DEMO2')
```

---

### **Stage 5: SENDING & SENT**
**Current Behavior:**
- Shows sending animation (1.2 seconds)
- Displays success state with green checkmark
- Auto-dismisses after 5 seconds

**🔌 INTEGRATION NEEDED:**
```javascript
// Location: Line ~134-144 - handleSend function
const handleSend = () => {
  setStage('sending');
  
  // ⚠️ TODO: ACTUAL API CALL TO SEND MESSAGE
  // Example:
  // try {
  //   await sendMessageToDispatch({
  //     fleetId: selectedFleetId,
  //     message: extractedMessage,
  //     timestamp: new Date().toISOString()
  //   });
  //   setStage('sent');
  // } catch (error) {
  //   setErrorMessage('Failed to send message');
  //   setStage('error');
  // }
  
  setTimeout(() => {
    setStage('sent');
    setQuickActions(afterSendQuickActions);
    setTimeout(() => { onClose('sent'); }, 5000);
  }, 1200);
};
```

**API Endpoint Structure:**
```typescript
// Expected backend API:
POST /api/fleet/send-message
Headers: {
  Authorization: Bearer <token>
}
Body: {
  fleetId: string,        // Selected fleet ID (e.g., "DEMO1")
  message: string,        // The message content
  timestamp: string,      // ISO timestamp
  driverId: string,       // Current driver ID
  truckId?: string        // Optional truck identifier
}

Response: {
  success: boolean,
  messageId: string,
  sentAt: string
}
```

---

## 🎤 Voice Command Listening During Stages

### **Critical Implementation: Continuous Listening**

The voice agent should **continue listening** during these stages:
1. **confirming** - Listen for "Send" or "Cancel"
2. **loadSummary** - Listen for follow-up questions
3. **eta** - Listen for related commands
4. **hos** - Listen for navigation commands
5. **weighStation** - Listen for actions
6. **certifyLogs** - Listen for "Certify" or "Cancel"

**Implementation Pattern:**
```javascript
// Create a hook for continuous command recognition
function useContinuousVoiceCommands(stage: ConversationStage) {
  useEffect(() => {
    if (stage === 'confirming') {
      const recognizer = startCommandRecognition();
      
      recognizer.onResult((text) => {
        const lowercaseText = text.toLowerCase();
        
        if (lowercaseText.includes('send')) {
          handleSend();
        } else if (lowercaseText.includes('cancel')) {
          onClose();
        } else if (lowercaseText.includes('change fleet')) {
          setShowFleetSelector(true);
        }
      });
      
      return () => recognizer.stop();
    }
  }, [stage]);
}
```

---

## 📊 Widget & Information Display Stages

### **Load Summary (loadSummary)**
**Location:** Lines 1468-1529
- Uses Figma import: `<Widgets />`
- Shows load details, stops, appointment times
- Mock speech: `"You're hauling a refrigerated load with three stops..."`

**🔌 TODO:**
- Fetch real load data from API
- Use text-to-speech to read load summary aloud
- Support follow-up questions: "What's the first stop?", "Is this hazmat?"

### **ETA Widget (eta)**
**Location:** Lines 1544-1658
- Custom component: `<ETAWidget />`
- Mock data: 7:30PM ETA, 45 minutes
- Mock speech: `"You should arrive at your destination in approximately 45 minutes..."`

**🔌 TODO:**
- Integrate with GPS/routing API (Google Maps, HERE Maps)
- Calculate real-time ETA based on current location
- Support traffic updates

### **HOS Status (hos)**
**Location:** Lines 1768-1837
- Uses Figma import: `<Hos />`
- Mock data: 45 minutes until rest, 2h 25m until day ends
- Mock speech: `"You have 45 minutes left until you have to rest..."`

**🔌 TODO:**
- Connect to ELD (Electronic Logging Device) API
- Read real drive time, duty status, violations
- Support queries: "How much time left?", "Am I legal?"

### **Weigh Station (weighStation)**
**Location:** Lines 1965-2086
- Custom UI with distance display
- Mock data: 47 miles, I-80 Eastbound Exit 312
- Shows ETA to weigh station

**🔌 TODO:**
- Integrate with weigh station API (Drivewyze, PrePass)
- Use GPS to calculate actual distance
- Show bypass status if applicable

### **Certify Logs (certifyLogs)**
**Location:** Lines 2088-2218
- Confirmation dialog for log certification
- Shows current date and time period
- Mock certification flow

**🔌 TODO:**
- Connect to ELD certification endpoint
- Validate certification requirements
- Handle signature/PIN authentication
- Store certification timestamp

### **Out of Scope (outOfScope)**
**Location:** Lines 1838-1963
- Triggered randomly (20% chance) OR when intent not recognized
- Shows "I can't help with that yet" message
- Displays all available quick actions

**🔌 TODO:**
- Trigger when NLU confidence < threshold (e.g., 60%)
- Log unrecognized intents for training
- Suggest closest matching intent

---

## 🎨 Visual Design System

### **Color Palette (Transflo Dark Theme)**
```css
Primary Blue:     #2474BB
Light Blue:       rgba(94, 179, 224, 0.8)
Accent Blue:      rgba(184, 230, 249, 0.95)
Dark Background:  rgba(8, 18, 32, 0.92)
Glass Overlay:    rgba(15, 22, 33, 0.4)
Card Background:  #0e2e4b
Border:           rgba(94, 179, 224, 0.25)
Success Green:    #00fd40 / #7ED321
Error Red:        rgba(255, 75, 75, 0.4)
Cancel Red:       rgba(255, 150, 150, 0.9)
```

### **Typography**
```css
Primary Font:   'Roboto', sans-serif
Secondary Font: 'Inter', 'SF Pro Display', -apple-system, system-ui
Headings:       font-weight: 700
Body:           font-weight: 400
Labels:         font-weight: 600
```

### **Animation Principles**
- **Ease curves:** `[0.32, 0.72, 0, 1]` for glass morphism
- **Duration:** 0.4-0.6s for transitions, 2-3s for ambient animations
- **Blur:** backdrop-filter: blur(20-40px) for glass effect
- **Physics:** Spring animations for organic feel (stiffness: 300, damping: 20)

---

## 🔐 Error Handling & Edge Cases

### **Error State**
**Location:** Lines 1833-1913
- Shows warning icon with red glow
- Displays error message
- Provides "Try Again" button

**🔌 TODO - Error Scenarios:**
```javascript
// Microphone permission denied
if (!micPermission) {
  setErrorMessage('Microphone access is required. Please enable it in settings.');
  setStage('error');
}

// Network failure
try {
  await voiceAPI.recognize(audio);
} catch (error) {
  setErrorMessage('Connection lost. Check your internet and try again.');
  setStage('error');
}

// API rate limit
if (response.status === 429) {
  setErrorMessage('Too many requests. Please wait a moment.');
  setStage('error');
}
```

### **Timeout State**
**Location:** Line ~105-111
- Triggers after 15 seconds of silence
- Only when `hasInteracted === true`
- Shows "No Voice Detected" message

**🔌 TODO:**
```javascript
// Implement silence detection
let silenceTimer;

function onVoiceActivity(hasActivity: boolean) {
  if (hasActivity) {
    clearTimeout(silenceTimer);
  } else {
    silenceTimer = setTimeout(() => {
      setStage('timeout');
      setErrorMessage('No voice input detected. Please try again.');
    }, 15000);
  }
}
```

---

## 🔧 Quick Actions System

### **Initial Quick Actions**
```javascript
const initialQuickActions = [
  "Whats My ETA",
  "What's My HOS Status",
  "How far till the weigh-station",
  "Certify logs",
  "Load Summary"
];
```

### **After Send Quick Actions**
```javascript
const afterSendQuickActions = [
  "Whats My ETA",
  "How far till the weigh-station",
  "What's My HOS Status",
  "Certify logs",
  "Load Summary"
];
```

**Handler Location:** Lines 1716-1734
```javascript
onClick={(e) => {
  e.preventDefault();
  if (action === "Load Summary") {
    setStage('loadSummary');
  } else if (action === "Whats My ETA") {
    setStage('eta');
  } else if (action === "What's My HOS Status") {
    setStage('hos');
  } else if (action === "How far till the weigh-station") {
    setStage('weighStation');
  } else if (action === "Certify logs") {
    setStage('certifyLogs');
  } else {
    setStage('listening');
    setQuickActions(initialQuickActions);
  }
}}
```

**🔌 TODO:**
- Make quick actions voice-activated (user can say the action)
- Dynamically generate based on context (e.g., if near weigh station, suggest bypass)

---

## 🚀 Step-by-Step Integration Guide

### **Phase 1: Setup Voice Recognition**

**1. Install Dependencies**
```bash
npm install @openai/whisper-node  # If using Whisper
# OR
npm install @google-cloud/speech  # If using Google
# OR use browser's Web Speech API (no install needed)
```

**2. Create Voice Service Wrapper**
```typescript
// /services/voiceService.ts
export class VoiceService {
  private recognition: SpeechRecognition | null = null;
  private audioContext: AudioContext;
  
  async initialize() {
    // Request microphone permission
    await navigator.mediaDevices.getUserMedia({ audio: true });
  }
  
  startListening(onTranscript: (text: string) => void) {
    // Setup speech recognition
  }
  
  stopListening() {
    // Stop recording
  }
  
  getAmplitude(): number {
    // Return current audio level for animation
  }
}
```

**3. Integrate into VoiceAgent**
```typescript
// In VoiceAgent.tsx
import { VoiceService } from '../services/voiceService';

const voiceService = new VoiceService();

useEffect(() => {
  if (isOpen) {
    voiceService.initialize();
  }
}, [isOpen]);
```

### **Phase 2: Replace Mock Transcription**

**1. Update handleListeningTap**
```typescript
const handleListeningTap = async (e: React.MouseEvent) => {
  e.stopPropagation();
  if (stage === 'listening' && !showFleetSelector) {
    setHasInteracted(true);
    setStage('transcribing');
    
    // Start real voice recognition
    voiceService.startListening({
      onPartialTranscript: (text) => {
        setLiveTranscript(text);
        // Animate transcript progress
        setTranscriptProgress((text.split(' ').length / 10) * 100);
      },
      onFinalTranscript: (text) => {
        setFinalTranscript(text);
        setStage('thinking');
        processIntent(text);
      }
    });
  }
};
```

**2. Update Amplitude Animation**
```typescript
useEffect(() => {
  if (stage === 'transcribing') {
    const amplitudeInterval = setInterval(() => {
      const realAmplitude = voiceService.getAmplitude();
      setVoiceAmplitude(realAmplitude);
    }, 100);
    return () => clearInterval(amplitudeInterval);
  }
}, [stage]);
```

### **Phase 3: Add NLU Processing**

**1. Create NLU Service**
```typescript
// /services/nluService.ts
export async function processIntent(transcript: string) {
  const response = await fetch('/api/nlu/analyze', {
    method: 'POST',
    body: JSON.stringify({ text: transcript }),
    headers: { 'Content-Type': 'application/json' }
  });
  
  const { intent, entities, confidence } = await response.json();
  
  return {
    intent,
    entities,
    confidence
  };
}
```

**2. Use in Thinking Stage**
```typescript
async function handleThinking(transcript: string) {
  const result = await processIntent(transcript);
  
  if (result.confidence < 0.6) {
    setStage('outOfScope');
    return;
  }
  
  switch (result.intent) {
    case 'send_message':
      setExtractedMessage(result.entities.message);
      setStage('confirming');
      break;
    case 'check_eta':
      await fetchETAData();
      setStage('eta');
      break;
    // ... other intents
  }
}
```

### **Phase 4: Add Text-to-Speech**

**1. Install TTS Library**
```bash
npm install @google-cloud/text-to-speech
# OR use browser's Web Speech API
```

**2. Speak Responses**
```typescript
// /services/ttsService.ts
export function speak(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;
  speechSynthesis.speak(utterance);
}

// Use in components
useEffect(() => {
  if (stage === 'loadSummary') {
    speak(loadSummarySpeech);
  }
}, [stage]);
```

### **Phase 5: Connect to Backend APIs**

**1. Message Sending**
```typescript
const handleSend = async () => {
  setStage('sending');
  
  try {
    const response = await fetch('/api/fleet/send-message', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fleetId: selectedFleetId,
        message: extractedMessage,
        timestamp: new Date().toISOString()
      })
    });
    
    if (response.ok) {
      setStage('sent');
    } else {
      throw new Error('Send failed');
    }
  } catch (error) {
    setErrorMessage('Failed to send message to dispatch');
    setStage('error');
  }
};
```

**2. Load Data**
```typescript
async function fetchLoadData() {
  const response = await fetch('/api/loads/current', {
    headers: { 'Authorization': `Bearer ${authToken}` }
  });
  const data = await response.json();
  setLoadData(data);
}
```

**3. HOS Data**
```typescript
async function fetchHOSStatus() {
  const response = await fetch('/api/eld/hos-status', {
    headers: { 'Authorization': `Bearer ${authToken}` }
  });
  const data = await response.json();
  setHOSData(data);
}
```

---

## 🔍 Testing Checklist

### **Voice Recognition Tests**
- [ ] Microphone permission request works
- [ ] Noise cancellation in loud environments
- [ ] Multiple accents and dialects
- [ ] Background noise handling (truck engine, wind)
- [ ] Partial transcripts update smoothly
- [ ] Final transcript is accurate

### **Intent Recognition Tests**
- [ ] All supported intents work correctly
- [ ] Low confidence triggers out-of-scope
- [ ] Entity extraction (message content, fleet ID)
- [ ] Handling ambiguous requests
- [ ] Multi-turn conversations

### **UI/Animation Tests**
- [ ] Smooth transitions between stages
- [ ] Amplitude bars respond to real audio
- [ ] Glass morphism renders correctly
- [ ] Animations don't stutter on low-end devices
- [ ] Dark mode is readable in daylight

### **Error Handling Tests**
- [ ] Microphone access denied
- [ ] Network timeout
- [ ] API errors (500, 429, 403)
- [ ] No voice detected timeout
- [ ] Malformed API responses

### **Integration Tests**
- [ ] Send message end-to-end
- [ ] Load summary fetches real data
- [ ] ETA calculates correctly
- [ ] HOS status shows live data
- [ ] Weigh station distance updates
- [ ] Log certification saves to backend

---

## 🎯 Recommended Voice APIs

### **Option 1: OpenAI Whisper + GPT-4 (Best Overall)**
**Pros:**
- High accuracy speech recognition
- Excellent NLU with GPT-4 function calling
- Handles trucking terminology well
- Easy integration

**Cons:**
- Requires API keys
- Cost per request
- Internet required

**Setup:**
```javascript
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Speech to text
const transcription = await openai.audio.transcriptions.create({
  file: audioFile,
  model: 'whisper-1'
});

// Intent processing
const completion = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: transcription.text }],
  functions: [
    {
      name: 'send_message',
      parameters: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
    // ... other functions
  ]
});
```

### **Option 2: Google Cloud Speech + Dialogflow (Best for Automotive)**
**Pros:**
- Optimized for noisy environments
- Real-time streaming
- Industry-standard reliability

**Cons:**
- More complex setup
- Google Cloud account required

### **Option 3: Web Speech API (Free, Browser-Native)**
**Pros:**
- No backend required
- Free
- Works offline (some browsers)

**Cons:**
- Limited browser support
- Less accurate than cloud APIs
- Privacy concerns (some browsers send to Google)

**Setup:**
```javascript
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  console.log('User said:', transcript);
};

recognition.start();
```

---

## 📝 State Variables Reference

**All located in VoiceAgent.tsx:**

| Variable | Type | Purpose |
|----------|------|---------|
| `stage` | ConversationStage | Current state machine stage |
| `voiceAmplitude` | number | Audio level (0-1) for animation |
| `quickActions` | string[] | Available quick action buttons |
| `transcriptProgress` | number | Transcript animation (0-100) |
| `selectedFleetId` | string | Currently selected fleet ID |
| `showFleetSelector` | boolean | Fleet selector modal visibility |
| `errorMessage` | string | Error message text |
| `hasInteracted` | boolean | User has tapped mic (enables timeout) |

**Mock Data Constants:**
```javascript
mockTranscript = "Hey, Umm Send a message. I will be there in 45 minutes"
mockMessage = "I will be there in 45 minutes."
loadSummarySpeech = "You're hauling a refrigerated load..."
etaSpeech = "You should arrive at your destination..."
hosSpeech = "You have 45 minutes left until you have to rest..."
FLEET_IDS = ['DEMO1', 'DEMO2', 'DEMO3']
```

---

## 🎬 Animation Details

### **Glass Morphism Overlay**
- Entry: Circular expand from tap position (0.9s ease)
- Background: `rgba(8, 18, 32, 0.92)` with 40px blur
- Exit: Collapse back to tap position

### **Microphone Orb (Listening)**
- Size: 200px diameter
- Float animation: 3.5s vertical bob
- Voice rings: 2 expanding circles, 1.4s duration
- Amplitude bars: 17 bars, 0.55s cycle

### **Voice Indicator (Confirming)**
- Size: 70px diameter
- Waveform: 7 bars, subtle pulsing
- Text: "Say 'Send' or 'Cancel'"
- Glow rings: 2 rings, 2.5s expansion

### **Transcript Card**
- Entry: Fade + scale (0.6s)
- Word-by-word reveal using `transcriptProgress`
- Glass pill: 20px blur, rounded-full

---

## 🔒 Security Considerations

1. **API Keys:** Never expose in client code
   ```javascript
   // ❌ WRONG
   const apiKey = 'sk-abc123';
   
   // ✅ CORRECT - Use backend proxy
   fetch('/api/voice/transcribe', { ... });
   ```

2. **Message Validation:** Sanitize before sending
   ```javascript
   const sanitizedMessage = DOMPurify.sanitize(extractedMessage);
   ```

3. **Authentication:** Include JWT tokens
   ```javascript
   headers: {
     'Authorization': `Bearer ${getAuthToken()}`
   }
   ```

4. **Rate Limiting:** Prevent spam
   ```javascript
   const rateLimiter = new RateLimiter(5, 60000); // 5 req/min
   ```

---

## 📞 Support & Questions

**Key Files to Modify:**
1. `/components/VoiceAgent.tsx` - Main logic
2. Create `/services/voiceService.ts` - Voice API wrapper
3. Create `/services/nluService.ts` - Intent processing
4. Update `/App.tsx` - Pass real data via props

**Environment Variables Needed:**
```env
VITE_OPENAI_API_KEY=sk-...
VITE_VOICE_API_URL=https://api.example.com
VITE_FLEET_API_URL=https://fleet.example.com
```

**Critical Integration Points:**
- Line ~119: Start voice recording
- Line ~125-130: Process intent
- Line ~134-144: Send message API
- Line ~82-88: Real amplitude
- Line ~44: Replace mock transcript

---

## ✅ Final Checklist

Before deploying with real voice:
- [ ] Microphone permissions properly requested
- [ ] Voice recognition initializes on mount
- [ ] Transcripts update in real-time
- [ ] NLU processes intents correctly
- [ ] All API endpoints are secured
- [ ] Error states handled gracefully
- [ ] Timeout after 15 seconds of silence
- [ ] TTS speaks responses aloud
- [ ] Amplitude bars reflect real audio
- [ ] Quick actions are voice-activated
- [ ] Fleet selector works via voice
- [ ] Message sending hits real backend
- [ ] Load/ETA/HOS data is live
- [ ] Out-of-scope handler logs unknowns
- [ ] Testing in real truck environment

---

**Document Version:** 1.0  
**Last Updated:** January 12, 2026  
**Component Version:** VoiceAgent Phase 2 Complete  

Good luck with the voice integration! 🎤🚛
