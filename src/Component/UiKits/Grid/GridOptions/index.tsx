import React from 'react';
import { Card, CardBody, Col, Table } from 'reactstrap';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { GridOptions, Javascript } from '@/Constant';
import GridTableHead from './GridTableHead';
import GridTableBody from './GridTableBody';
const GridOptionsCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={GridOptions} description='Bootstrap grid allows building an equal height flexbile blocks easily' />
        <CardBody>
          <p>
            {'While Bootstrap uses'} <code>{'em'} </code>
            {'or'} <code>{'rem'} </code>
            {'for defining most sizes'}, <code>{'px'}</code> {'are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the'} <a href={Javascript}>{'font size'}</a>.
          </p>
          <div className='table-responsive'>
            <Table bordered striped>
              <GridTableHead />
              <GridTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCard;
