import { Button } from 'reactstrap';
import { Javascript } from '@/Constant';
import { ACtivNavData } from '@/Data/UiKitsData/Navs';

const OnHoverDropDown = () => {
  return (
    <div className='onhover-dropdown navs-dropdown'>
      <Button color='primary' className=' onhover-dropdown'>
        Dropdown example <i className='icon-arrow-down'></i>
      </Button>
      <div className='onhover-show-div'>
        <ul className='icon-lists border navs-icon simple-list'>
          {ACtivNavData.map((data, index) => (
            <li key={index}>
              <a href={Javascript} className={data?.aClassName}>
                {data.logo}
                <span> {data.tittle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnHoverDropDown;
