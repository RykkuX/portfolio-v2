import React, { useState, useEffect } from 'react';
import { typographyClasses, colorClasses } from '../../utils/typography';

interface TypingEffectProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  words, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 1000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[currentWordIndex];
    const shouldDelete = isDeleting;
    const currentSpeed = shouldDelete ? deleteSpeed : speed;

    const timeout = setTimeout(() => {
      if (shouldDelete) {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word is complete, pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    }, currentSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect; 