import React, { useState, useEffect } from "react";
import styled from "styled-components";

function About() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pincode: "",
  });

  // whenever you want to change the state useState hook

  const changeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <h1>Underdstanding State</h1>

      <Form>
        <input
          type="text"
          value={form.name}
          onChange={changeInput}
          required
          name="name"
        />
        <input
          type="number"
          value={form.mobile}
          onChange={changeInput}
          required
          name="mobile"
        />
        <input
          type="number"
          value={form.pincode}
          onChange={changeInput}
          required
          name="pincode"
        />
        <button onClick={submit}>submit</button>
      </Form>
    </div>
  );
}

export default About;

const Form = styled.form`
  width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
