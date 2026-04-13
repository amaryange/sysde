import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody, Spinner } from 'reactstrap';
import Breadcrumbs from '@/CommonComponents/BreadCrumb';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { LoaderStyle } from '@/Constant';
import { Data } from '@/Data/UiKitsData/SpinnerData/SpinnerData';

const SpinnersComponent = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Spinners' parent='Ui Kits' title='Spinners' />
      <Container fluid={true}>
        <Row>
          <Col sn='12'>
            <Card>
              <CardHeaderCommon title={LoaderStyle} />
              <CardBody className='row'>
                <Col md='3'>
                  <h6 className='sub-title mb-0 text-center'>{'Loader 1'}</h6>
                  <div className='loader-box'>
                    <Spinner className='loader-1' />
                  </div>
                </Col>
                {Data.map((spinner) => (
                  <Col md='3' key={spinner.id}>
                    <h6 className='sub-title mb-0 text-center'>{spinner.heading}</h6>
                    <div className='loader-box'>
                      <Spinner className={spinner.spinnerClass} />
                    </div>
                  </Col>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SpinnersComponent;
