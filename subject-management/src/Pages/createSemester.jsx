import { React, useState, useEffect, Fragment } from "react";
import SemesterApi from "../config/api/SemesterApi";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "../Components/TextField";
import { Formik, Form } from "formik";
import User from "../config/userContext";

const CreateSemester = (props) => {
  const goToSemesters = () => props.history.push(`/semesters`);

  const addSemester = (values) => {
    SemesterApi.addSemester({
      name: values.name,
      user: User,
    }).then(() => {
      goToSemesters();
    });
  };

  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <h1>Create Semester</h1>
        <Formik
          initialValues={{ name: "" }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              addSemester(values);
              setSubmitting(false);
            });
          }}
        >
          {() => (
            <Form>
              <TextField
                name="name"
                size="medium"
                label="name"
                variant="outlined"
                style={{ marginTop: 10 }}
              />
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10, float: "left" }}
                  onClick={() => goToSemesters()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10, float: "right" }}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Grid>
    </Fragment>
  );
};

export default CreateSemester;
