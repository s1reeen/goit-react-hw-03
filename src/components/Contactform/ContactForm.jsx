import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ handleAddContact }) => {
  const initialValues = {
    username: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Enter a valid phone number (e.g., 123-45-67)"
      )
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleAddContact(
            { name: values.username, number: values.number },
            { resetForm }
          );
        }}
      >
        <Form className={css.form}>
          <span>Name</span>
          <Field className={css.inputField} name="username" />
          <ErrorMessage
            name="username"
            component="p"
            className={css.formError}
          />
          <span>Number</span>
          <Field className={css.inputField} name="number" inputMode="n" />
          <ErrorMessage name="number" component="p" className={css.formError} />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
