import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  constantText: string;
  variableTexts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  constantText,
  variableTexts,
  typingSpeed = 100,
  pauseDuration = 2000,
}: TypewriterProps): React.ReactNode {
  const [currentText, setCurrentText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentVariableText = variableTexts[index];

    if (!isDeleting && charIndex < currentVariableText.length) {
      const typingTimer = setTimeout(() => {
        setCurrentText(currentVariableText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimer);
    }

    if (isDeleting && charIndex > 0) {
      const deletingTimer = setTimeout(() => {
        setCurrentText(currentVariableText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);

      return () => clearTimeout(deletingTimer);
    }

    if (!isDeleting && charIndex === currentVariableText.length) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % variableTexts.length);
    }
  }, [charIndex, isDeleting, index, variableTexts, typingSpeed, pauseDuration]);

  return (
    <div className="flex flex-col items-center">
  
      <span className='mukta-bold text-transparent bg-clip-text bg-gradient-to-b text-6xl from-[#6EACDA] via-[#6EACDA] to-[#fff]'>
        {constantText}
      </span>


      <div className="flex items-center mt-2">
        <span className="typed-text mukta-bold text-transparent bg-clip-text bg-gradient-to-b text-5xl from-[#6EACDA] via-[#6EACDA] to-[#fff] text-left">
          {currentText}
        </span>
        <span className="cursor text-[#6EACDA] text-4xl animate-blink ml-1">|</span>
      </div>
    </div>
  );
}
