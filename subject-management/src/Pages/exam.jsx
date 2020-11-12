import { React, useState, useEffect } from "react";
import ExamApi from "../config/api/ExamApi";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
  );
};

export default Exam;
