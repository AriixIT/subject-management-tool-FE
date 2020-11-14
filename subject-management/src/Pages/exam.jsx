import { React, useState, useEffect, Fragment } from "react";
import ExamApi from "../config/api/ExamApi";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ExamForm from "../Components/forms/examForm";
import { TextField as MuiTextField } from "@material-ui/core";
const Exam = (props) => {
  const { match } = props;
  const id = match.params.id;
  const subejctId = match.params.subjectId;
  const semesterId = match.params.semesterid;
  const [exam, setExam] = useState({});

  const goToSubject = () => {
    props.history.push(`/semesters/${semesterId}/subjects/${subejctId}`);
  };

  const updateExam = (values) => {
    ExamApi.updateExam(id, {
      id: id,
      name: values.name,
      mark: values.mark,
      date: values.date,
      subject: exam.subject,
    })
      .then((res) => res.json())
      .then((data) => {
        setExam(data);
      });
  };

  useEffect(() => {
    ExamApi.getExam(id)
      .then((res) => res.json())
      .then((data) => {
        setExam(data);
      });
  }, []);

  return (
    <Fragment>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 40 }}
          onClick={() => goToSubject()}
        >
          Back
        </Button>
        <ExamForm data={exam} submit={updateExam} />
      </Grid>
    </Fragment>
  );
};

export default Exam;
