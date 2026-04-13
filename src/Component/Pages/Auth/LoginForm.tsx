import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label, ListGroup, ListGroupItem } from 'reactstrap';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import { Javascript } from '@/Constant';

const LoginForm = () => {
  return (
    <Fragment>
      <div className='login-card'>
        <Form className='theme-form login-form'>
          <h4>Login</h4>
          <h6>Welcome back! Log in to your account.</h6>
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
                Remember password
              </Label>
            </div>
            <a className='link' href={Javascript}>
              Forgot password?
            </a>
          </FormGroup>
          <FormGroup>
            <Button className='btn-block' color='primary' type='submit'>
              Sign in
            </Button>
          </FormGroup>
          <div className='login-social-title'>
            <h5>Sign in with</h5>
          </div>
          <FormGroup>
            <ListGroup className='login-social flex-row'>
              <ListGroupItem>
                <a href='https://www.linkedin.com/login'>
                  <Linkedin />
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href='https://www.linkedin.com/login'>
                  <Twitter />
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href='https://www.linkedin.com/login'>
                  <Facebook />
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href='https://www.instagram.com/login'>
                  <Instagram />
                </a>
              </ListGroupItem>
            </ListGroup>
          </FormGroup>
          <p>
            Don't have account?
            <a className='ms-2' href={Javascript}>
              Create Account
            </a>
          </p>
        </Form>
      </div>
    </Fragment>
  );
};

export default LoginForm;
