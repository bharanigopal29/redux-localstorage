import React from 'react';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Form() {
    
  const validationSchema = Yup.object({
    users: Yup.array().of(
      Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        age: Yup.number().required('Enter your Age'),
      })
    ),
  });

  return (
    <Formik
      initialValues={{
        users: [{ firstName: '', lastName: '', age: 0 }],
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray name="users">
            {({ push, remove }) => (
              <div>
                {values.users.map((user, index) => (
                  <div key={index}>
                    <Field
                      name={`users.${index}.firstName`}
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name={`users.${index}.firstName`}
                      component="div"
                    />
                    <Field
                      name={`users.${index}.lastName`}
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name={`users.${index}.lastName`}
                      component="div"
                    />
                    <Field
                      name={`users.${index}.age`}
                      placeholder="age"
                    />
                    <ErrorMessage
                      name={`users.${index}.age`}
                      component="div"
                    />
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => push({ firstName: '', lastName: '', age: 0 })}
                >
                  Add User
                </button>
              </div>
            )}
          </FieldArray>

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
