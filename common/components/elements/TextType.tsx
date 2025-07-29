"use client";

import { useEffect, useRef, useState, ElementType, createElement } from "react";

interface TextTypeProps {
  className?: string;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  initialDelay = 0,
  loop = true,
  className = "",
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  variableSpeed,
  textColors = [],
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textArray = Array.isArray(text) ? text : [text];

  const getSpeed = () => {
    if (variableSpeed) {
      const { min, max } = variableSpeed;
      return Math.random() * (max - min) + min;
    }
    return isDeleting ? deletingSpeed : typingSpeed;
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const currentTextRaw = textArray[textIndex];
    const currentText = reverseMode
      ? currentTextRaw.split("").reverse().join("")
      : currentTextRaw;

    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          const nextIndex = (textIndex + 1) % textArray.length;
          setTextIndex(nextIndex);
          onSentenceComplete?.(textArray[textIndex], textIndex);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (loop || textIndex < textArray.length - 1) {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }

      timeout = setTimeout(handleTyping, getSpeed());
    };

    timeout = setTimeout(
      handleTyping,
      charIndex === 0 ? initialDelay : getSpeed(),
    );

    return () => clearTimeout(timeout);
  }, [
    isVisible,
    charIndex,
    isDeleting,
    textIndex,
    deletingSpeed,
    typingSpeed,
    pauseDuration,
    loop,
    initialDelay,
    reverseMode,
    variableSpeed,
    textArray,
    onSentenceComplete,
  ]);

  const currentColor =
    (textColors?.length ?? 0) > 0
      ? textColors[textIndex % textColors.length]
      : "inherit";

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <>
      <span className="inline" style={{ color: currentColor }}>
        {displayedText}
      </span>
    </>,
  );
};

export default TextType;
