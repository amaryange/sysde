import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { CollapsibleGroupItem, ColorAccordion } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import SecondaryColorAccordionBody from './SecondaryColorAccordionBody';
import { SecondaryColorAccordionDescription } from '@/Data/CardHeaderCommonData';

const SecondaryColorAccordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(1);
  const toggle = (id: number) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  const data = [2, 3, 4, 5];
  return (
    <Col sm='12' xl='6'>
      <Accordion defaultActiveKey='0'>
        <Card>
          <CardHeaderCommon title={ColorAccordion} description={SecondaryColorAccordionDescription} />

          <CardBody>
            <div className='default-according' id='accordion'>
              <Card>
                <CardHeader className='bg-secondary'>
                  <h5 className='mb-0'>
                    <Button className='btn-link text-white' color='default' onClick={() => toggle(1)}>
                      {CollapsibleGroupItem}
                      <span className='digits'> #1</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'}</CardBody>
                </Collapse>
              </Card>
              {data.map((element, index) => (
                <Card key={index}>
                  <SecondaryColorAccordionBody isOpen={isOpen} toggle={toggle} element={element} />
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default SecondaryColorAccordion;
