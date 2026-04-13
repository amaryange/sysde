import { AssetsImagePath, Javascript } from '@/Constant';
import { useHeaderStore } from '../../../Store/useHeaderStore';
import Image from 'next/image';
import { AlignCenter } from 'react-feather';

const LeftHeader = () => {
  const logoToggle    = useHeaderStore((s) => s.logoToggle);
  const toggleSidebar = useHeaderStore((s) => s.toggleSidebar);

  return (
    <div className='main-header-left'>
      <div className={logoToggle ? 'dark-logo-wrapper' : 'logo-wrapper'}>
        <a href={Javascript}>
          <Image alt='logo' width={83} height={29} className='img-fluid' src={`${AssetsImagePath}/logo/${logoToggle ? 'dark-logo.png' : 'logo.png'}`} unoptimized />
        </a>
      </div>
      <div className='toggle-sidebar' onClick={toggleSidebar}>
        <AlignCenter />
      </div>
    </div>
  );
};

export default LeftHeader;
