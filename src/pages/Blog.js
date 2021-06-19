import React, { useState } from "react";
import styled from "styled-components";

function Blog() {
  const [data, setData] = useState("");
  const [mobile, setMobile] = useState("");
  const valueChange = (e) => {
    setData(e.target.value);
  };
  const mobileChange = (e) => {
    setMobile(e.target.value);
  };
  const valueSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(data);
    console.log(mobile);
    console.log("====================================");
  };

  return (
    <Form>
      <label for="#name">First Name</label>
      <Input
        type="text"
        id="name"
        name="first name"
        placeholder="eg.Katiyar"
        onChange={valueChange}
        value={data}
      />
      <label for="#number">Mobile</label>
      <Input
        type="number"
        id="number"
        name="Mobile number"
        onChange={mobileChange}
        value={mobile}
      />
      <Button onClick={valueSubmit}>Submit</Button>
    </Form>
  );
}

// value-data --> value change -->onChange function fires --> new value set data --> value-data
export default Blog;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  padding: 5px 10px;
  border-radius: 15px;
  width: 200px;
  margin: 10px auto;
  cursor: pointer;
`;
const Input = styled.input`
  width: 400px;
  margin: 20px auto;

  &::placeholder {
  }
`;
