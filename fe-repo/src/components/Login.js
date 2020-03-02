import React from "react";
import { withFormik, Form, Field } from "formik";

const Login = props => (
  <Form>
    <div>
      <label htmlFor='user'>
        <Field
          id='user'
          name='user'
          type='text'
          placeholder='User-Name'
          autoComplete='off'
        />
      </label>
      <label htmlFor='password'>
        <Field
          id='password'
          name='password'
          type='text'
          placeholder='Password'
          autoComplete='off'
        />
      </label>
      <button type='submit'>Submit&rarr;</button>
    </div>
  </Form>
);
export default withFormik({
  mapPropsToValues() {
    return {
      user: "",
      password: "",
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(Login);
