import { useEffect, useState, useRef } from 'react';

const GradientHeader = ({ className, children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const h1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const h1Position = h1Ref.current.getBoundingClientRect().top;
      setScrollPosition(Math.max(0, h1Position / window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientValue = Math.min(scrollPosition, 1);

  const h1Style = {
    backgroundImage: `linear-gradient(to bottom, #000 ${gradientValue * 100}%, #fff)`,
  };

  return (
    <div style={h1Style} className={`${className} uppercase bg-clip-text text-transparent`}>
      <h1 ref={h1Ref}>{children}</h1>
    </div>
  );
};

export default GradientHeader;
