import React, { useEffect, useRef } from 'react';
import '@scss/Animation.scss';

function TextTyping({ text }) {
  const textTypingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypingAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });

    if (textTypingRef.current) {
      observer.observe(textTypingRef.current);
    }

    return () => {
      if (textTypingRef.current) observer.unobserve(textTypingRef.current);
    };
  }, []);

  const startTypingAnimation = () => {
    const element = textTypingRef.current;
    const textContent = text.replace(/(<br>)/g, '');

    textContent.split('').forEach((char, index) => {
      setTimeout(() => {
        if (index === textContent.length - 1) {
          element.innerHTML += `<span>${char}</span><span class="text_typing"></span>`;
        } else {
          element.innerHTML += `<span>${char}</span>`;
        }
      }, 100 * index);
    });
  };

  return (
    <div className="parent_typing" ref={textTypingRef}></div>
  );
}

export default TextTyping;
