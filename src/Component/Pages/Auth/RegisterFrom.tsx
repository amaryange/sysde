import { Javascript } from '@/Constant';
import React, { Fragment } from 'react';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label, ListGroup, ListGroupItem } from 'reactstrap';

const RegisterFrom = () => {
  return (
    <Fragment>
      <div className='login-card'>
        <Form className='theme-form login-form'>
          <h4>Create your account</h4>
          <h6>Enter your personal details to create account</h6>
          <FormGroup>
            <Label>Your Name</Label>
            <div className='small-group'>
              <InputGroup className='mb-2'>
                <InputGroupText>
                  <i className='icon-user'></i>
                </InputGroupText>
                <Input type='text' required={true} placeholder='Fist Name' />
              </InputGroup>
              <InputGroup>
                <InputGroupText>
                  <i className='icon-user'></i>
                </InputGroupText>
                <Input type='email' required={true} placeholder='Last Name' />
              </InputGroup>
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Email Address</Label>
            <InputGroup>
              <InputGroupText>
                <i className='icon-email'></i>
              </InputGroupText>
              <Input type='email' required={true} placeholder='Test@gmail.com' />
            </InputGroup>
          </FormGroup>
          <FormGroup className='position-relative'>
            <Label>Password</Label>
            <InputGroup>
              <InputGroupText>
                <i className='icon-lock'></i>
              </InputGroupText>
              <Input type='password' name='login[password]' required={true} placeholder='*********' />
              <div className='show-hide'>
                <span className='show'> </span>
              </div>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <div className='checkbox'>
              <Input id='checkbox1' type='checkbox' />
              <Label className='text-muted' for='checkbox1'>
                Agree with <span>Privacy Policy</span>
              </Label>
            </div>
          </FormGroup>
          <FormGroup>
            <Button className='btn btn-primary btn-block' type='submit'>
              Create Account
            </Button>
          </FormGroup>
          <div className='login-social-title'>
            <h5>signup with</h5>
          </div>
          <FormGroup>
            <ListGroup className='login-social flex-row'>
              <ListGroupItem>
                <a href={Javascript}>
                  <Linkedin />
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href={Javascript}>
                  <Twitter />
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href={Javascript}>
                  <Facebook />
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href={Javascript}>
                  <Facebook />
                </a>
              </ListGroupItem>
            </ListGroup>
          </FormGroup>
          <p>
            Already have an account?
            <a className='ms-2' href={Javascript}>
              Sign in
            </a>
          </p>
        </Form>
      </div>
    </Fragment>
  );
};

export default RegisterFrom;
