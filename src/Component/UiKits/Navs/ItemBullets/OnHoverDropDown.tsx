import { Javascript } from '@/Constant';
import { ItemBulletsNavData } from '@/Data/UiKitsData/Navs';
import { Button } from 'reactstrap';

const OnHoverDropDown = () => {
  return (
    <div className='onhover-dropdown navs-dropdown'>
      <Button className='onhover-dropdown' color='primary'>
        Dropdown example <i className='icon-arrow-down'></i>
      </Button>
      <div className='onhover-show-div'>
        <div className='nav-list'>
          <ul className='nav-list-disc'>
            {ItemBulletsNavData.map((data, index) => (
              <li key={index}>
                <a href={Javascript}>
                  <i className='fa fa-angle-right'></i>
                  <span> {data.tittle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnHoverDropDown;
