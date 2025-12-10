import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRef, useEffect } from "react";

function MyForm({ addTask }) {
  const initialValues = {
    input: "",
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = (values, { resetForm }) => {
    if (!values.input) return;
    console.log("Form values:", values);
    addTask(values.input);
    resetForm();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.input) return;
    if (values.input.length < 5) {
      errors.input = "Should be 5 characters or more.";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form onKeyDown={onSubmit} className="form">
        <div className="input-container">
          <Field
            className="form__input"
            type="text"
            id="input"
            name="input"
            innerRef={inputRef}
          />
          <ErrorMessage
            className="error-message"
            name="input"
            component="div"
          />
        </div>
        <button className="form__btn" type="submit">
          Add
        </button>
      </Form>
    </Formik>
  );
}

export default MyForm;
