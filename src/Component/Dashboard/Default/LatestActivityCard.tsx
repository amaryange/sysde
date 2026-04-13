import React from 'react';
import { Card, CardBody, CardHeader, Media, Table } from 'reactstrap';
import Link from 'next/link';
import { LatestActivity } from '@/Data/Dashboard';
import { Delete, Edit, LatestActivityConst, Month, Today } from '@/Constant';

const LatestActivityClass = () => {
  return (
    <Card className='latest-update-sec'>
      <CardHeader>
        <div className='header-top d-sm-flex align-items-center'>
          <h5>{LatestActivityConst}</h5>
          <div className='center-content'>
            <ul className='week-date flex-row'>
              <li className='font-primary'>{Today}</li>
              <li>{Month}</li>
            </ul>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className='table-responsive'>
          <Table className='table-bordernone m-0'>
            <tbody>
              {LatestActivity.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Media>
                      {item.icon}
                      <Media body>
                        <Link href={`/app/task`}>
                          <span>{item.name}</span>
                        </Link>
                        <p>{item.subtitle}</p>
                      </Media>
                    </Media>
                  </td>
                  <td>
                    <Link href={`/app/todo`}>{Edit}</Link>
                  </td>
                  <td>
                    <Link href={`/app/todo`}>{Delete}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default LatestActivityClass;
