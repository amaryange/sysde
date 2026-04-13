import { Javascript } from '@/Constant';
import React, { Fragment } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PagesSort = () => {
  return (
    <Fragment>
      <div className='info-block m-t-30'>
        <nav>
          <ListGroup className=' pagination pagination-primary d-flex flex-row'>
            <ListGroupItem className='page-item disabled'>
              <a className='page-link' href={Javascript} tabIndex={-1}>
                Previous
              </a>
            </ListGroupItem>
            <ListGroupItem className='page-item'>
              <a className='page-link' href={Javascript}>
                1
              </a>
            </ListGroupItem>
            <ListGroupItem className='page-item active'>
              <a className='page-link' href={Javascript}>
                2 <span className='sr-only'>(current)</span>
              </a>
            </ListGroupItem>
            <ListGroupItem className='page-item'>
              <a className='page-link' href={Javascript}>
                3
              </a>
            </ListGroupItem>
            <ListGroupItem className='page-item'>
              <a className='page-link' href={Javascript}>
                Next
              </a>
            </ListGroupItem>
          </ListGroup>
        </nav>
      </div>
    </Fragment>
  );
};
export default PagesSort;
