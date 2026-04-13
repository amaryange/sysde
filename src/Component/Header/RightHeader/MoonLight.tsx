import { Moon, Sun } from 'react-feather';
import { useHeaderStore } from '../../../Store/useHeaderStore';

const MoonLight = () => {
  const { logoToggle, setLightTheme, setDarkTheme } = useHeaderStore();

  const handleToggle = () => {
    if (logoToggle) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <li>
      <div className='mode' onClick={handleToggle}>
        {logoToggle ? <Sun /> : <Moon />}
      </div>
    </li>
  );
};

export default MoonLight;
