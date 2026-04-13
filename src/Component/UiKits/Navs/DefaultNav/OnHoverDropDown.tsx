import { Javascript } from '@/Constant';
import { deafultNavData } from '@/Data/UiKitsData/Navs';
import { Button } from 'reactstrap';

const OnHoverDropDown = () => {
  return (
    <div className='onhover-dropdown navs-dropdown'>
      <Button color='primary' className='onhover-dropdown'>
        Dropdown example <i className='icon-arrow-down'></i>
      </Button>
      <div className='onhover-show-div'>
        <ul className='simple-list icon-lists navs-icon'>
          {deafultNavData.map((data, index) => (
            <li key={index}>
              <a href={Javascript}>
                {data.logo}
                <span>{data.tittle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default OnHoverDropDown;
