import { React, useState, useEffect, Fragment } from "react";
import TextField from "../TextField";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";

const ExamForm = (props) => {
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
        initialValues={{
          name: data.name,
          mark: data.mark,
          date: data.date ? data.date : "-",
        }}
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
              <div>
                <TextField
                  name="name"
                  label="name"
                  size="medium"
                  variant="outlined"
                  style={{ marginTop: 10 }}
                />
                <br></br>
                <TextField
                  name="mark"
                  label="mark"
                  size="small"
                  variant="outlined"
                  style={{ marginTop: 10 }}
                />
                <br></br>
                <TextField
                  name="date"
                  size="small"
                  variant="outlined"
                  style={{ marginTop: 10 }}
                  label="date"
                />
              </div>
            ) : (
              <div>
                <h1>{data.name}</h1>
                <h3>Mark: {data.mark}</h3>
                <h3>Date: {data.date ? data.date : "-"}</h3>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default ExamForm;
