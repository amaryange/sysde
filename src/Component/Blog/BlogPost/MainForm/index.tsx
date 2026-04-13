import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Typeahead } from "react-bootstrap-typeahead";
import { FormGroup, Label, Input } from "reactstrap";
import { Title, Type, Category, Content } from "@/Constant";

import { AddPostBlogMainFormData } from "@/Data/Blog";

const MainForm = () => {
  const data = [{ name: "Lifestyle" }, { name: "Travel" }];
  return (
    <>
      <FormGroup className="mb-3">
        <Label for="validationCustom01">{Title}:</Label>
        <Input id="validationCustom01" type="text" placeholder="Post Title" required />
        <div className="valid-feedback">{"Looks good!"}</div>
      </FormGroup>
      <FormGroup className="mb-3">
        <Label>{Type}:</Label>
        <div className="m-checkbox-inline">
          {AddPostBlogMainFormData.map((item, i) => (
            <Label key={i} for={item.id}>
              <Input className="radio_animated" id={item.id} type="radio" name="rdo-ani" />
              {item.title}
            </Label>
          ))}
        </div>
      </FormGroup>
      <FormGroup className="mb-3">
        <div className="col-form-Label">
          {Category}:
          <Typeahead id="multiple-typeahead" className="mt-2" labelKey="name" multiple options={data} placeholder="Select Your Name...." />
        </div>
      </FormGroup>
      <div className="email-wrapper">
        <div className="theme-form">
          <FormGroup>
            <Label>{Content}:</Label>
            <CKEditor editor={ClassicEditor} data="Your messages..." />
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default MainForm;
