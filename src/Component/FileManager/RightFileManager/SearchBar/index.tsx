import { FileManagerSearchBarProps } from '@/Type/SideBarType';
import React from 'react';
import { Form, Input } from 'reactstrap';

const SearchBar = ({ setSearchTerm, searchTerm }: FileManagerSearchBarProps) => {
  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <Form className='form-inline'>
      <div className='mb-0 d-flex'>
        <i className='fa fa-search'></i>
        <Input className='form-control-plaintext shadow-none' type='text' value={searchTerm} onChange={(e) => handleChange(e)} placeholder='Search...' />
      </div>
    </Form>
  );
};
export default SearchBar;
