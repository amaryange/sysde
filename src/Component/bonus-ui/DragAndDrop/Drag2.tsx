import React, { ComponentRef, useEffect, useRef } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import dragula from 'react-dragula';
import { SpillDragNDrop } from '../../../Constant';
import CardHeaderCommon from '@/CommonComponents/CardHeaderCommon';

const Drag2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      let options = {
        isContainer: function () {
          return false;
        },
        direction: 'vertical',
        copy: false,
        copySortSource: false,
        revertOnSpill: true,
        removeOnSpill: true,
        mirrorContainer: document.body,
        ignoreInputTextSelection: true,
      };
      dragula([containerRef.current], options);
    }
  }, []);

  return (
    <Col sm='12'>
      <Card>
        <CardHeaderCommon title={SpillDragNDrop} />
        <CardBody>
          <div className='ui-sortable' id='draggableMultiple'>
            <div className='container' ref={containerRef}>
              <div>{'You can move these elements between these two containers'}</div>
              <div>{"Moving them anywhere else isn't quite possible"}</div>
              <div>{"There's also the possibility of moving elements around in the same container, changing their position"}</div>
              <div>{'This is the default use case. You only need to specify the containers you want to use'}</div>
              <div>{'You can move these elements between these two containers'}</div>
              <div>{"Moving them anywhere else isn't quite possible"}</div>
              <div>{'Make sure to check out the documentation on GitHub!'}</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Drag2;
