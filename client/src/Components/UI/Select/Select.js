import React from "react";
import Select from "react-select";

const SelectInput = (props) => {
  return (
    <Select
      className="react-select"
      classNamePrefix="react-select"
      placeholder={props.placeholder}
      ref={props.ref}
      value={
        props.value !== undefined && props.value !== null
          ? props.value.length === 0
            ? null
            : { value: props.value, label: props.value }
          : null
      }
      onChange={(value) =>
        props.onChange(
          value !== null && value !== undefined ? value.label : null,
          props.name
        )
      }
      name={props.name}
      styles={{
        control: (styles) => ({
          background: "rgba(230, 230, 230, 0.823)",
          ...styles,
          ...props.style,
        }),
      }}
      options={
        props.options === null
          ? []
          : [...props.options.map((el) => ({ value: el, label: el }))]
      }
    />
  );
};

export default SelectInput;
