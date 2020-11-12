import { React, useState, useEffect, Fragment } from "react";
import ExamApi from "../config/api/ExamApi";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Exam = (props) => {
  const { match } = props;
  const id = match.params.id;
  const [exam, setExam] = useState({});

  useEffect(() => {
    ExamApi.getExam(id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExam(data);
      });
  }, {});

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        style={{ float: "left", marginLeft: 450, marginTop: 40 }}
        onClick={() => props.history.goBack()}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ float: "right", marginRight: 450, marginTop: 40 }}
      >
        Edit
      </Button>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <h1>{exam.name}</h1>
        <h3>Mark: {exam.mark ? exam.mark : "-"}</h3>
        <h3>Date: {exam.date ? exam.date : "-"}</h3>
      </Grid>
    </Fragment>
  );
};

export default Exam;
