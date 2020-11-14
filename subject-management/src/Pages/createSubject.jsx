import { React, Fragment } from "react";
import SubjectApi from "../config/api/SubjectApi";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "../Components/TextField";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";

const CreateSubject = (props) => {
  const location = useLocation();
  const semester = location.state.semester;

  const goToSemester = () => props.history.push(`/semesters/` + semester.id);

  const addSubject = (values) => {
    SubjectApi.addSubject({
      name: values.name,
      semester: semester,
    }).then(() => {
      goToSemester();
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
        <h1>Create Subject</h1>
        <Formik
          initialValues={{ name: "" }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              addSubject(values);
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
                  onClick={() => goToSemester()}
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

export default CreateSubject;
