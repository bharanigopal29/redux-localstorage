import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { UserRole } from "./features/page/pageSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(2, "Too Short!")
  //     .max(70, "Too Long!")
  //     .required("Required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string().required("Password is required"),

  role: Yup.string().required("Role is required"),
});

const roles = ["admin", "user"];

function Register() {
  const dispatch = useDispatch();
  //   const user = useSelector(selectUser);

  const initialValues = {
    email: "",
    password: "",
    role: "",
  };

  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.userinfo);
  console.log("user", user);
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://192.168.1.24:5000/api/login",
        values
      );
      const { accessToken, userinfo } = response.data;
      dispatch(UserRole(userinfo));
      if (accessToken) {
        localStorage.setItem("token", accessToken);
        navigate("/home");
      }
      console.log("res", response.data);
      //   console.log("token", accessToken);
    } catch (err) {
      console.error("err", err);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Register Page</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div> */}

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="role">Role:</label>
            <Field as="select" id="role" name="role">
              <option value="" label="Select a role" />
              {roles?.map((role) => (
                <option key={role} value={role} label={role} />
              ))}
            </Field>
            <ErrorMessage name="role" component="div" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
