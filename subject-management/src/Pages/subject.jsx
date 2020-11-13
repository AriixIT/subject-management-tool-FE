import { React, useState, useEffect, Fragment } from "react";
import SubjectApi from "../config/api/SubjectApi";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import BasicForm from "../Components/forms/basicForm";

const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
  },
});

const Subject = (props) => {
  const classes = useStyles();

  const { match } = props;
  const id = match.params.id;
  const semesterId = match.params.semesterid;

  const [subject, setSubject] = useState({});

  const goToExam = (exam) =>
    props.history.push(
      `/semesters/${semesterId}/subjects/${id}/exams/${exam.id}`
    );

  const updateSubject = (values) => {
    SubjectApi.updateSubject(id, {
      id: id,
      name: values.name,
      semester: subject.semester,
    })
      .then((res) => res.json())
      .then((data) => {
        setSubject(data);
      });
  };

  useEffect(() => {
    SubjectApi.getSubject(id)
      .then((res) => res.json())
      .then((data) => {
        setSubject(data);
      });
  }, []);

  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 40 }}
          onClick={() => props.history.goBack()}
        >
          Back
        </Button>
        <BasicForm data={subject} submit={updateSubject} />
        <h3>Average: {subject.average}</h3>
        <h3>Exams:</h3>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: 10 }}
        >
          Add Exam
        </Button>
        {subject.exams ? (
          <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "lightgrey" }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mark</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subject.exams.map((row) => (
                  <TableRow
                    hover
                    key={row.id}
                    onClick={() => {
                      goToExam(row);
                    }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.mark}</TableCell>
                    <TableCell>{row.date ? row.date : "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </Grid>
    </Fragment>
  );
};

export default Subject;
