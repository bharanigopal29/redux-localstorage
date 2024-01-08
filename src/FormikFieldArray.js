import React, { useState } from "react";
import { Formik, Field, FieldArray, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  friends: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .min(2, "Short")
        .max(50, "Long")
        .required("Required Name"),

      email: Yup.string().email("Invalid Email").required("Required Email"),

      age: Yup.number()
        .min(1, "double dgt")
        .max(3, "Large dgt")
        .required("Requird Age"),
    })
  ),
});

const initialValues = {
  friends: [{ name: "", email: "", age: 0 }],
};

const FormikFieldArray = () => {
  const [nameFieldValue, setNameFieldValue] = useState("");

  return (
    <>
      <h1>FormikFieldArray</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        //validateOnBlur={true}
        onSubmit={(values) => {
          // Handle the form submission
          console.log(values);
        }}
        //validateOnChange={true}
      >
        {({ values, setFieldValue }) => (
          <>
            <Form>
              <FieldArray name="friends">
                {({ push, remove }) => (
                  <div>
                    {values?.friends?.length > 0 &&
                      values?.friends.map((friend, index) => (
                        <div key={index}>
                          <label htmlFor={`friends.${index}.name`}>Name</label>
                          {console.log(values?.friends, "-->namevalue")}
                          <input
                            type="text"
                            id={`friends[${index}].name`}
                            name={`friends[${index}].name`}
                            onChange={(e) => {
                              setFieldValue(
                                `friends[${index}].name`,
                                e.target.value
                              );
                            }}
                          />
                          <ErrorMessage
                            name={`friends[${index}].name`}
                            component="div"
                          />

                          {/* Display value in <p> tag */}
                          <p>Name: {nameFieldValue}</p>

                          {/* ... other fields ... */}

                          <button type="button" onClick={() => remove(index)}>
                            Remove Friend
                          </button>
                        </div>
                      ))}

                    <button
                      type="button"
                      onClick={() => push({ name: "", email: "", age: 0 })}
                    >
                      Add Friend
                    </button>
                  </div>
                )}
              </FieldArray>

              <button type="submit">Submit</button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormikFieldArray;
