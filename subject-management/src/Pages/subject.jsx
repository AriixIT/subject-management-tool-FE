import { React, useState, useEffect } from "react";
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

  useEffect(() => {
    SubjectApi.getSubject(id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubject(data);
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
      <h1>{subject.name}</h1>
      <h3>Average: {subject.average}</h3>
      <h3>Exams:</h3>
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
  );
};

export default Subject;
