import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;