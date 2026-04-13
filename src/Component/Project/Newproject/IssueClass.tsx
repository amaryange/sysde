import React, { useState } from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { ProjectFormType } from '@/Type/SideBarType';
import { Big, Comments, Issues, Medium, Resolved, Small } from '@/Constant';
import Combobox, { ComboboxOption } from '@/Component/Common/Combobox';

const ISSUE_OPTIONS: ComboboxOption[] = [
  { value: Small,  label: Small  },
  { value: Medium, label: Medium },
  { value: Big,    label: Big    },
];

const IssueClass = ({ register }: ProjectFormType) => {
  const [issue, setIssue] = useState<ComboboxOption | null>(ISSUE_OPTIONS[0]);

  return (
    <Row>
      <Col sm='4'>
        <Combobox
          label={Issues}
          options={ISSUE_OPTIONS}
          value={issue}
          onChange={(opt) => setIssue(opt ?? null)}
          isClearable={false}
        />
      </Col>
      <Col sm='4'>
        <FormGroup>
          <Label>{Resolved}</Label>
          <input className='form-control' type='text' placeholder='Add Resolved issues' {...register('resolved', { required: true })} />
        </FormGroup>
      </Col>
      <Col sm='4'>
        <FormGroup>
          <Label>{Comments}</Label>
          <input className='form-control' type='text' placeholder='Add Comment' {...register('comment', { required: true })} />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default IssueClass;
