import { Card, CardBody } from 'reactstrap';
import React from 'react';
import { RecentOrders } from '@/Data/Dashboard';
import Image from 'next/image';
import Link from 'next/link';
import { AssetsImagePath, Date, Name, QuantityConst, Rate, RecentOrdersConst, Value } from '@/Constant';

const RecentOrderClass = () => {
  return (
    <Card>
      <CardBody>
        <div className='table-responsive'>
          <h5>{RecentOrdersConst}</h5>
          <table className='table table-bordernone'>
            <thead>
              <tr>
                <th>{Name}</th>
                <th>{Date}</th>
                <th>{QuantityConst}</th>
                <th>{Value}</th>
                <th>{Rate}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {RecentOrders.map((items) => (
                <tr key={items.id}>
                  <td>
                    <div className='media'>
                      <img className='img-fluid rounded-circle' src={items.img} alt='Recent Order image' />
                      <div className='media-body'>
                        <Link href={`/app/ecommerce/product`}>
                          <span>{items.name}</span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{items.date}</p>
                  </td>
                  <td>
                    <p>{items.quantity}</p>
                  </td>
                  <td>
                    {/* nextJs image not working for so have used img tag */}
                    <img className='img-fluid ' width={58} height={13} src={`${AssetsImagePath}/${items.value}`} alt='RecentOrder button' />
                  </td>
                  <td>
                    <p>{items.rate}</p>
                  </td>
                  <td>
                    <p>{items.status}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default RecentOrderClass;
