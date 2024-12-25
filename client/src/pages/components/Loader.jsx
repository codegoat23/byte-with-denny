import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Disable scrollbar when loader is active
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Start fade-out after 2.5s when loader animation ends
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out after animation ends
    }, 2500); // Loader duration (2.5s)

    // Reset overflow to normal after loader has disappeared
    const cleanupTimer = setTimeout(() => {
      setLoading(false); // Remove loader after fade-out completes
      document.body.style.overflow = ''; // Re-enable scrolling
      document.documentElement.style.overflow = ''; // Re-enable scrolling
    }, 3000); // Time for the fade-out effect to complete

    // Cleanup function
    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  if (!loading) return null;  // Hide loader once it's removed

  return (
    <StyledWrapper fadeOut={fadeOut}>
     
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Full-page loader styles */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
   background: #191921; /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${(props) => (props.fadeOut ? 0 : 1)};  /* Control opacity for fade-out */
  transition: opacity 0.8s ease-out;  /* Shorter fade-out transition */
  pointer-events: none;
  
  .loader {
    --size: 400px;
    --duration: 2.5s;
    --logo-color: grey;
    --background: linear-gradient(0deg, rgb(30 27 109 / 20%) 0%, rgb(137 76 161 / 20%) 100%);
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
    pointer-events: none;
  }

  .loader .box {
    position: absolute;
    background: var(--background);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px 0, inset rgba(205, 155, 255, 0.5) 0px 5px 10px -7px;
    animation: ripple var(--duration) infinite ease-in-out;
    inset: var(--inset);
    animation-delay: calc(var(--i) * 0.15s);
    z-index: calc(var(--i) * -1);
    pointer-events: all;
    transition: all 0.3s ease;
  }

  .loader .box:last-child {
    filter: blur(30px);
  }

  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 30%;
  }

  .loader .logo svg {
    fill: var(--logo-color);
    width: 100%;
    animation: color-change var(--duration) infinite ease-in-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px 0, inset rgba(205, 155, 255, 0.5) 0px 5px 10px -7px;
    }
    65% {
      transform: scale(1.4);
      box-shadow: rgba(0, 0, 0, 0) 0px 0 0 0;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px 0, inset rgba(205, 155, 255, 0.5) 0px 5px 10px -7px;
    }
  }

  @keyframes color-change {
    0% {
      fill: var(--logo-color);
    }
    50% {
      fill: white;
    }
    100% {
      fill: var(--logo-color);
    }
  }
`;

export default Loader;
