import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BlockQuotes, SourceTitle } from '@/Constant';
import { BlockQuoteCarrData } from '@/Data/UiKitsData/Typography/BlockQuoteCarrData';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';
import { BlockQuoteCardDescription } from '@/Data/CardHeaderCommonData';

const BlockQuoteCard = () => {
  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={BlockQuotes} description={BlockQuoteCardDescription} />
        <CardBody>
          {BlockQuoteCarrData.map((element, index) => (
            <Fragment key={index}>
              <p className='sub-title'>{element.title}</p>
              <blockquote className={`blockquote ${element.name}`}>
                <p className='mb-0'>{element.description}</p>
              </blockquote>
              <footer className={`blockquote-footer ${element.name} p-0`}>
                {element.footerText}
                <cite title='Source Title'>{SourceTitle}</cite>
              </footer>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuoteCard;
