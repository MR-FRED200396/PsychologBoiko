import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "занадто коротке імя")
    .max(20, "занадто довге імя")
    .required("потрібно заповнити дане поле"),
  age: Yup.number("тут потрібно вписати число")
    .required("потрібно заповнити дане поле")
    .positive("число повинно бути додатнім")
    .min(18, "працюю лише з повнолітніми")
    .max(99, "працюю лише з людьми до 100 років")
    .integer("потрібно вказати повні роки"),
  instagramNicname: Yup.string()
    .min(2, "занадто коротке прізвище")
    .max(20, "занадто довге прізвище")
    .required("потрібно заповнити дане поле"),
  description: Yup.string()
    .required("потрібно заповнити дане поле")
    .min(20, "занадто короткий опис")
    .max(650, "занадто довгий опис"),
});
export default function Contact() {
  return (
    <>
      <h1>Заповни форму для зворотнього звязку</h1>
      <Formik
        initialValues={{
          name: "",
          age: "",
          instagramNicname: "",
          description: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" placeholder="Ім'я" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <Field name="age" placeholder="вік" />
            {errors.age && touched.age ? <div>{errors.age}</div> : null}

            <Field name="instagramNicname" placeholder="нікнейм в Instagram" />
            {errors.instagramNicname && touched.instagramNicname ? (
              <div>{errors.instagramNicname}</div>
            ) : null}

            <Field
              name="description"
              as="textarea"
              placeholder="Короткий опис твого запиту"
            ></Field>
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}

            <button type="submit">Відправити</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
