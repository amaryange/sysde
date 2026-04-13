import { Javascript } from '@/Constant';
import { IncomeCards } from '@/Type/SideBarType';
import React from 'react';
import { Card, CardBody } from 'reactstrap';

const IncomeCard = ({ iconClass, amount, title, percent }: IncomeCards) => {
  return (
    <Card className='income-card card-primary'>
      <CardBody className='text-center'>
        <div className='round-box'>{iconClass}</div>
        <h5>{amount}</h5>
        <p>{title}</p>
        <a className='btn-arrow arrow-primary' href={Javascript}>
          <i className='toprightarrow-primary fa fa-arrow-up me-2'></i>
          {percent}{' '}
        </a>
      </CardBody>
    </Card>
  );
};

export default IncomeCard;
