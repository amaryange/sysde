import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { ProjectFormType } from '@/Type/SideBarType';
import { Doing, Done, ProgressLevel, ProjectRate, ProjectStatus } from '@/Constant';

const ProjectRateClass = ({ register, errors }: ProjectFormType) => {
  return (
    <Row>
      <Col sm='4'>
        <FormGroup>
          <Label>{ProjectRate}</Label>
          <input className='form-control' type='number' defaultValue='10' placeholder='Enter project Rate' {...register('rate', { required: true })} />
        </FormGroup>
      </Col>
      <Col sm='4'>
        <FormGroup>
          <Label>{ProgressLevel}</Label>
          <select className='form-select digits' required {...register('progress', { required: true })}>
            <option value='25'>{'25'}</option>
            <option value='50'>{'50'}</option>
            <option value='70'>{'70'}</option>
            <option value='100'>{'100'}</option>
          </select>
        </FormGroup>
      </Col>
      <Col sm='4'>
        <FormGroup>
          <Label>{ProjectStatus}</Label>
          <select className='form-select digits' {...register('badge', { required: true })} required>
            <option value='Done'>{Done}</option>
            <option value='Doing'>{Doing}</option>
          </select>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default ProjectRateClass;
