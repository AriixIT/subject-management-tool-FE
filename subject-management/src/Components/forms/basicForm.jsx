import { React, useState, useEffect, Fragment } from "react";
import TextField from "../TextField";
import { Formik, Form } from "formik";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const BasicForm = (props) => {
  const { data, submit } = props;
  const [editing, setEditing] = useState(false);

  let submitMyForm = null;

  const handleSubmitMyForm = (e) => {
    if (submitMyForm) {
      submitMyForm(e);
    }
  };

  const bindSubmitForm = (submitForm) => {
    submitMyForm = submitForm;
  };

  return (
    <Fragment>
      {editing ? (
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          onClick={() => {
            handleSubmitMyForm();
            setEditing(false);
          }}
        >
          Save
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          onClick={() => setEditing(true)}
        >
          Edit
        </Button>
      )}

      <Formik
        initialValues={{ name: data.name }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            submit(values);
            setSubmitting(false);
          });
        }}
      >
        {(formikProps) => (
          <Form>
            {bindSubmitForm(formikProps.submitForm)}

            {editing ? (
              <TextField
                name="name"
                size="medium"
                variant="outlined"
                style={{ marginTop: 10 }}
              />
            ) : (
              <h1>{data.name}</h1>
            )}
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default BasicForm;
