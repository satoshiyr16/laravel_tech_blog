import React, { useEffect, useRef, useState } from 'react';
import '@scss/Animation.scss';

function FadeIn({ children, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4
      }
    );

    if(ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const appliedClassName = `${className} ${isVisible ? 'fadeIn' : ''}`;
  return (
    <div ref={ref} className={appliedClassName}>
      {children}
    </div>
  );
}

export default FadeIn;
