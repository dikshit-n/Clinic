import React from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";
import uniqueid from "uniqid";
import DateInput from "../Date/Date";

import Select from "../Select/Select";

const EachField = (props) => {
  let id = uniqueid();
  const getFormField = () => {
    switch (props.type) {
      case "text":
        return (
          <FormGroup style={{ textAlign: "left" }}>
            {props.displayName ? (
              <Label for={id}>{props.displayName}</Label>
            ) : null}
            {props.addon ? (
              <InputGroup>
                <InputGroupAddon addonType={props.addon.type}>
                  <InputGroupText>{props.addon.text}</InputGroupText>
                </InputGroupAddon>
                <Input
                  disabled={props.disabled}
                  type={props.type}
                  id={id}
                  name={props.name}
                  value={props.value}
                  onChange={(event) => {
                    props.onChange(event);
                  }}
                  placeholder={props.placeholder}
                  required={props.required}
                  readOnly={props.readOnly}
                  {...props}
                />
              </InputGroup>
            ) : (
              <Input
                disabled={props.disabled}
                type={props.type}
                id={id}
                name={props.name}
                value={props.value}
                onChange={(event) => {
                  props.onChange(event);
                }}
                placeholder={props.placeholder}
                required={props.required}
                readOnly={props.readOnly}
                {...props}
              />
            )}
          </FormGroup>
        );
      case "textarea":
        return (
          <FormGroup style={{ textAlign: "left" }}>
            {props.displayName ? (
              <Label for={id}>{props.displayName}</Label>
            ) : null}
            {props.addon ? (
              <InputGroup>
                <InputGroupAddon addonType={props.addon.type}>
                  <InputGroupText>{props.addon.text}</InputGroupText>
                </InputGroupAddon>
                <Input
                  disabled={props.disabled}
                  type={props.type}
                  id={id}
                  value={props.value}
                  onChange={(event) => {
                    props.onChange(event);
                  }}
                  name={props.name}
                  placeholder={props.placeholder}
                  required={props.required}
                  readOnly={props.readOnly}
                  {...props}
                />
              </InputGroup>
            ) : (
              <Input
                disabled={props.disabled}
                type={props.type}
                id={id}
                value={props.value}
                onChange={(event) => {
                  props.onChange(event);
                }}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                readOnly={props.readOnly}
                {...props}
              />
            )}
          </FormGroup>
        );
      case "select":
        return (
          <FormGroup style={{ textAlign: "left" }}>
            {props.displayName ? (
              <Label for={id}>{props.displayName}</Label>
            ) : null}
            {props.addon ? (
              <InputGroup>
                <InputGroupAddon addonType={props.addon.type}>
                  <InputGroupText>{props.addon.text}</InputGroupText>
                </InputGroupAddon>
                <Select
                  style={{ background: "#fafafa" }}
                  name={props.name}
                  value={props.value}
                  onChange={(value, name) => {
                    props.onChange(value, name);
                  }}
                  options={props.options}
                  {...props}
                />
              </InputGroup>
            ) : (
              <Select
                style={{ background: "#fafafa" }}
                name={props.name}
                value={props.value}
                onChange={(value, name) => {
                  props.onChange(value, name);
                }}
                options={props.options}
                {...props}
              />
            )}
          </FormGroup>
        );
      case "number":
        return (
          <FormGroup style={{ textAlign: "left" }}>
            {props.displayName ? (
              <Label for={id}>{props.displayName}</Label>
            ) : null}
            {props.addon ? (
              <InputGroup>
                <InputGroupAddon addonType={props.addon.type}>
                  <InputGroupText>{props.addon.text}</InputGroupText>
                </InputGroupAddon>
                <Input
                  disabled={props.disabled}
                  type={props.type}
                  id={id}
                  value={props.value}
                  onChange={(event) => {
                    props.onChange(event);
                  }}
                  name={props.name}
                  placeholder={props.placeholder}
                  required={props.required}
                  readOnly={props.readOnly}
                  {...props}
                />
              </InputGroup>
            ) : (
              <Input
                disabled={props.disabled}
                type={props.type}
                id={id}
                value={props.value}
                onChange={(event) => {
                  props.onChange(event);
                }}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                readOnly={props.readOnly}
                {...props}
              />
            )}
          </FormGroup>
        );

      case "date":
        return (
          <FormGroup style={{ textAlign: "left" }}>
            {props.displayName ? (
              <Label for={id}>{props.displayName}</Label>
            ) : null}
            {props.addon ? (
              <InputGroup>
                <InputGroupAddon addonType={props.addon.type}>
                  <InputGroupText>{props.addon.text}</InputGroupText>
                </InputGroupAddon>
                <DateInput
                  disabled={props.disabled}
                  type={props.type}
                  id={id}
                  value={props.value}
                  onChange={(event) => {
                    props.onChange(event);
                  }}
                  name={props.name}
                  placeholder={props.placeholder}
                  required={props.required}
                  readOnly={props.readOnly}
                  {...props}
                />
              </InputGroup>
            ) : (
              <DateInput
                disabled={props.disabled}
                type={props.type}
                id={id}
                value={props.value}
                onChange={(event) => {
                  props.onChange(event);
                }}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                readOnly={props.readOnly}
                {...props}
              />
            )}
          </FormGroup>
        );
      default:
        return (
          <FormGroup style={{ textAlign: "left" }}>
            {props.displayName ? (
              <Label for={id}>{props.displayName}</Label>
            ) : null}
            {props.addon ? (
              <InputGroup>
                <InputGroupAddon addonType={props.addon.type}>
                  <InputGroupText>{props.addon.text}</InputGroupText>
                </InputGroupAddon>
                <Input
                  disabled={props.disabled}
                  type={props.type}
                  id={id}
                  name={props.name}
                  value={props.value}
                  onChange={(event) => {
                    props.onChange(event);
                  }}
                  placeholder={props.placeholder}
                  required={props.required}
                  readOnly={props.readOnly}
                  {...props}
                />
              </InputGroup>
            ) : (
              <Input
                disabled={props.disabled}
                type={props.type}
                id={id}
                name={props.name}
                value={props.value}
                onChange={(event) => {
                  props.onChange(event);
                }}
                placeholder={props.placeholder}
                required={props.required}
                readOnly={props.readOnly}
                {...props}
              />
            )}
          </FormGroup>
        );
    }
  };
  return getFormField();
};

export default EachField;

// const changeHandler = (event) => {
//   const { name, value } = event.target;
//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

// const selectChangeHandler = (value, name) => {
//   setFormData((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

// var schema = [
//   {
//     name: "name",
//     displayName: "Name",
//     placeholder: "Enter Name",
//     type: "text",
//     value: formData.name,
//     onChange: changeHandler,
//     required: true,
//   },
//   {
//     name: "address",
//     displayName: "Address",
//     placeholder: "Enter Address",
//     type: "textarea",
//     value: formData.address,
//     onChange: changeHandler,
//     required: true,
//   },
//   {
//     name: "country",
//     displayName: "Country",
//     placeholder: "Enter Country",
//     type: "select",
//     value: formData.country,
//     onChange: selectChangeHandler,
//     options: ["India", "Japan"],
//     required: true,
//   },
//   {
//     name: "email",
//     displayName: "Email",
//     placeholder: "Enter Email",
//     type: "email",
//     value: formData.email,
//     onChange: changeHandler,
//     required: true,
//   },
//   {
//     name: "contactPerson",
//     displayName: "Contact Person",
//     placeholder: "Enter Contact Person",
//     type: "text",
//     value: formData.contactPerson,
//     onChange: changeHandler,
//     required: true,
//   },
//   {
//     name: "contactNumber",
//     displayName: "Contact Number",
//     placeholder: "Enter Contact Number",
//     type: "number",
//     value: formData.contactNumber,
//     onChange: changeHandler,
//     required: true,
//   },
//   {
//     name: "latitude",
//     type: "number",
//     displayName: "Latitude",
//     placeholder: "Enter Latitude",
//     value: formData.latitude,
//     onChange: changeHandler,
//     required: true,
//   },
//   {
//     name: "longitude",
//     type: "number",
//     displayName: "Longitude",
//     placeholder: "Enter Longitude",
//     value: formData.longitude,
//     onChange: changeHandler,
//     required: true,
//   },
// ];
