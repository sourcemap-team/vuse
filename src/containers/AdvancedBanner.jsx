import { useEffect, useState } from 'react';

const AdvancedBanner = ({ image, title, text, children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={
        'flex flex-col lg:flex-row items-center rounded-xl bg-mid-banner-2 bg-no-repeat bg-cover'
      }
      style={{
        paddingRight: '40px',
        ...(windowWidth <= 1024
          ? {
              padding: '20px 40px',
              paddingBottom: '20px',
              paddingLeft: '20px',
            }
          : {}),
      }}
    >
      <img
        src={image}
        className={'hidden lg:block rounded-xl w-44 h-28'}
        alt='number-one'
        style={{ height: '100%', width: '45%' }}
      />
      <div
      >
        <h3 className={'text-white text-xl lg:text-2xl font-bold'}>{title}</h3>
        <p className={'text-white text-xs mt-4'}>{text}</p>
        {children}
      </div>
    </div>
  );
};

export default AdvancedBanner;
