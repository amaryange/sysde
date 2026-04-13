import React, { Fragment } from 'react';
import { GitHub } from 'react-feather';
import { toast } from 'react-toastify';
import { Button } from 'reactstrap';

const GithubCus = () => {
  const handlesubmit = () => {
    toast.error("This is only demo purpose, click on the Sign In button to login.");
  };
  return (
    <Button color='light' onClick={handlesubmit}>
      <GitHub />
    </Button>
  );
};

export default GithubCus;
