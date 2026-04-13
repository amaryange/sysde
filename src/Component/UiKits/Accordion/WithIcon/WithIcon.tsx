import React, { useState } from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { AccordionWithIcon, CollapsibleGroupItem } from '../../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { withIconData } from '@/Data/UiKitsData/Accordian';
import WithIconBody from './WithIconBody';
import { WithIconAccordionDescription } from '@/Data/CardHeaderCommonData';

const WithIcon = () => {
  const [isOpen, setIsOpen] = useState<number | null>(1);
  const toggle = (id: number) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));

  return (
    <Col sm='12' xl='6'>
      <Accordion defaultActiveKey='0'>
        <Card>
          <CardHeaderCommon title={AccordionWithIcon} description={WithIconAccordionDescription} />
          <CardBody>
            <div className='default-according' id='accordion'>
              <Card>
                <CardHeader className='bg-primary'>
                  <h5 className='mb-0'>
                    <Button className='btn-link text-white' color='default' onClick={() => toggle(1)}>
                      <i className='icofont icofont-briefcase-alt-2'></i>
                      {CollapsibleGroupItem}
                      <span className='digits'> #1</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </CardBody>
                </Collapse>
              </Card>
              {withIconData.map((element, index) => (
                <Card key={index}>
                  <WithIconBody isOpen={isOpen} toggle={toggle} element={element} />
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default WithIcon;
