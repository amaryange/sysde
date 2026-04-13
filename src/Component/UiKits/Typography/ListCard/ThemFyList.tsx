import { ThemFyListConst } from '@/Constant';
import { ThemFyListData } from '@/Data/UiKitsData/Typography/ListCardData';
import React from 'react';
import { Col } from 'reactstrap';

const ThemFyList = () => {
  return (
    <Col sm='12' xl='4'>
      <h6 className='sub-title'>{ThemFyListConst}</h6>
      <ul>
        <li>
          <i className='icofont icofont-ui-rate-add txt-success me-2'></i>
          Lorem ipsum dolor sit amet
        </li>
        {ThemFyListData.map((element, index) => (
          <li key={index}>
            <i className='icofont icofont-ui-rate-add txt-success me-2'></i>
            {element}
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default ThemFyList;
