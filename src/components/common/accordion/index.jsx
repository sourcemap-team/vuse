import { useState } from 'react';
import m from './accordion.module.scss';

const Accordion = ({ className, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={className}>
      <button className={m.header} onClick={toggleAccordion}>
        {title}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            className={`${m.plus} ${isActive ? 'opacity-0' : 'opacity-100'}`}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10 0C10.5523 0 11 0.407014 11 0.909091V19.0909C11 19.593 10.5523 20 10 20C9.44772 20 9 19.593 9 19.0909V0.909091C9 0.407014 9.44772 0 10 0Z'
            fill='black'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M-5.23373e-08 10C-8.12425e-08 9.44772 0.407014 9 0.909091 9L19.0909 9C19.593 9 20 9.44772 20 10C20 10.5523 19.593 11 19.0909 11L0.909091 11C0.407014 11 -2.34322e-08 10.5523 -5.23373e-08 10Z'
            fill='black'
          />
        </svg>
      </button>
      <div className={`${m.content} ${isActive ? 'max-h-36 ' : 'max-h-0 '}`}>
        <p className={'p-4'} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Accordion;
