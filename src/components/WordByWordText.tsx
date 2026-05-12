import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface WordByWordTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
  wordsPerSecond?: number;
}

export function WordByWordText({ 
  text, 
  className = "",
  style,
  onComplete,
  wordsPerSecond = 3.5 
}: WordByWordTextProps) {
  const [visibleWords, setVisibleWords] = useState(0);
  const words = text.split(' ');
  
  useEffect(() => {
    const msPerWord = 1000 / wordsPerSecond;
    
    const timer = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev >= words.length) {
          clearInterval(timer);
          if (onComplete) onComplete();
          return prev;
        }
        return prev + 1;
      });
    }, msPerWord);
    
    return () => clearInterval(timer);
  }, [words.length, wordsPerSecond, onComplete]);
  
  return (
    <p className={className} style={style}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index < visibleWords ? 1 : 0,
          }}
          transition={{ 
            duration: 0.15,
            ease: "easeOut"
          }}
        >
          {word}{index < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </p>
  );
}
