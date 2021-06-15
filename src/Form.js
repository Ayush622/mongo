import React from "react";
import { Formik } from "formik";

const Form = () => (
  <div>
    <h1>Registration Page</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        } else if (!/^[A-Z]{2,}$/i.test(values.name)) {
          errors.name = "Invalid name";
        } else if (!values.mno) {
          errors.mno = "Required";
        } else if (!/^[6-9]{1}[0-9]{9}$/i.test(values.mno)) {
          errors.mno = "Invalid mobile number";
        } else if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (!values.password) {
          errors.password = "Required";
        } else if (!values.cpassword) {
          errors.password = "Required";
        } else if (values.password !== values.cpassword) {
          errors.password = "Password not matched";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <p>
            Name
            <input
              type="name"
              name="name"
              onChange={handleChange}
              Basicge={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </p>
          {errors.name && touched.name && errors.name}
          <br />
          <p>
            Mobile Number
            <input
              type="mno"
              name="mno"
              onChange={handleChange}
              Basicge={handleChange}
              onBlur={handleBlur}
              value={values.mno}
            />
          </p>
          {errors.mno && touched.mno && errors.mno}
          <br />
          <p>
            Email Address
            <input
              type="email"
              name="email"
              onChange={handleChange}
              Basicge={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </p>
          {errors.email && touched.email && errors.email}
          <br />
          <p>
            Password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </p>
          {errors.password && touched.password && errors.password}
          <br />
          <p>
            Confirm Password
            <input
              type="cpassword"
              name="cpassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cpassword}
            />
          </p>
          {errors.cpassword && touched.cpassword && errors.cpassword}
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
