import React, { useState } from "react";

type FormInputs = {
  email: string;
  age: number;
  name: string;
  phone: {
    ext: string;
    number: string;
  };
};

const FormInput = ({ type, name, placeHolder, required, onChange }: any) => {

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <br />
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        required={required}
        onChange={onChange}
        autoComplete="off"
      />
      <br />
    </>
  );
};

export default FormInput;
