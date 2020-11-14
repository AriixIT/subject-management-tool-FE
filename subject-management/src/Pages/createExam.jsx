import { React, Fragment } from "react";
import ExamApi from "../config/api/ExamApi";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "../Components/TextField";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";

const CreateExam = (props) => {
  const location = useLocation();
  const subject = location.state.subject;
  const semesterId = location.state.semesterId;

  const goToSubject = () =>
    props.history.push("/semesters/" + semesterId + "/subjects/" + subject.id);

  const addExam = (values) => {
    ExamApi.addExam({
      name: values.name,
      mark: values.mark,
      date: values.date,
      subject: subject,
    }).then(() => {
      goToSubject();
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
        <h1>Create Exam</h1>
        <Formik
          initialValues={{ name: "", mark: null, date: "" }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              addExam(values);
              setSubmitting(false);
            });
          }}
        >
          {() => (
            <Form>
              <TextField
                name="name"
                label="name"
                size="small"
                variant="outlined"
                style={{ marginTop: 10 }}
              />
              <br></br>
              <TextField
                name="mark"
                label="mark"
                size="small"
                type="number"
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
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10, float: "left" }}
                  onClick={() => goToSubject()}
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

export default CreateExam;
