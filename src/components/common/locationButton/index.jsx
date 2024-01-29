import { useNavigate } from 'react-router-dom';
import icon from 'src/assets/images/icons/location-button.svg';

export default function LocationButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('locations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  return (
    <button
      className={'fixed bottom-16 right-10 w-[75px] lg:w-[100px] z-40'}
      onClick={handleClick}
    >
      <img src={icon} alt='icon' />
    </button>
  );
}
