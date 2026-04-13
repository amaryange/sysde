import { AskOurCommunity, AskQuestion, ContactUs, Javascript, Navigation } from '@/Constant';
import { FAQNavigationData } from '@/Data/FAQ/Faq';
import React from 'react';
import { Mail, MessageCircle, MessageSquare, Settings } from 'react-feather';
import { Button, Card, CardBody, CardHeader, Col } from 'reactstrap';

const NavigationFAQ = () => {
  return (
    <Col lg='12'>
      <Card className='card-mb-faq'>
        <CardHeader className='faq-header'>
          <h5>{Navigation}</h5>
          <Settings />
        </CardHeader>
        <CardBody className='faq-body'>
          <Button color='primary' className='navigation-btn'>
            <a style={{ color: '#fff' }} href={Javascript}>
              <MessageSquare className='m-r-10' />
              {AskQuestion}
            </a>
          </Button>
          <div className='navigation-option'>
            <ul>
              {FAQNavigationData.map((item, i) => (
                <li key={i}>
                  <a href={Javascript}>
                    {item.icon}
                    {item.title}
                  </a>
                  <span className={item.class}>{item.value}</span>
                </li>
              ))}
            </ul>
            <hr />
            <ul>
              <li>
                <a href={Javascript}>
                  <MessageCircle />
                  {AskOurCommunity}
                </a>
              </li>
              <li>
                <a href={Javascript}>
                  <Mail />
                  {ContactUs}
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NavigationFAQ;
