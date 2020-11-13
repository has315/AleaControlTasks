import React, { useEffect, useState } from "react";
import { Form, FormInput } from "../../components/";

const FormSubmission = () => {
  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456",
    },
  });


  return (
    <>
      <Form initialValues={userInfo} onSubmit={setUserInfo}>
        <FormInput
          type="email"
          required
          name="email"
          placeHolder="your@email.com"
        />
        <FormInput type="number" name="age" />
        <FormInput type="text" required name="name" />
        <FormInput type="text" name="phone.ext" />
        <FormInput type="text" name="phone.number" />
        <FormInput type="submit" value="Submit" name="Submit" />
      </Form>
      {JSON.stringify(userInfo)}
      </>
  );


};

export default FormSubmission;
