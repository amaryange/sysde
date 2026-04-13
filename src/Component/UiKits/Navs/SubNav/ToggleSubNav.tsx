import { Button, Col } from 'reactstrap';
import { useState } from 'react';
import { Javascript } from '@/Constant';
import { TogleSubNavArr } from '@/Data/UiKitsData/Navs';

const ToggleSubNav = () => {
  const [toggleNav, setToggleNav] = useState(1);
  const toggleHandle = (i: number) => {
    setToggleNav((prev: number) => (prev === i ? 0 : i));
  };
  return (
    <Col lg='6' className='nav-md-mt'>
      <div>
        <h5>Toggle Sub Nav</h5>
      </div>
      <ul className='icon-lists border navs-icon default-according style-1'>
        {TogleSubNavArr.map((data, index) => (
          <li key={index}>
            {data.children ? (
              <>
                <Button aria-expanded={toggleNav === index ? true : false} color='default' className={toggleNav === index ? 'btn-link text-muted active' : 'collapsed  btn-link text-muted active'} onClick={() => toggleHandle(index)}>
                  {data.logo}
                  <span> {data.tittle}</span>
                </Button>
              </>
            ) : (
              <a href={Javascript}>
                {data.logo} <span> {data.tittle}</span>
              </a>
            )}
            {data?.children && (
              <ul className={`collapse ${toggleNav === index ? 'show' : ''}`}>
                {data.children.map((data, index2) => (
                  <li key={index2} className='pl-navs-inline'>
                    <a href={Javascript}>
                      <i className='fa fa-angle-right'></i>
                      {data}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Col>
  );
};
export default ToggleSubNav;
