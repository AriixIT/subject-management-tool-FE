import { React, useState, useEffect } from "react";
import SemesterApi from "../config/api/SemesterApi";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
  },
});

const Semester = (props) => {
  const classes = useStyles();

  const { match } = props;
  const id = match.params.id;
  const [semester, setSemester] = useState({});

  const goToSubject = (subject) =>
    props.history.push(`/semesters/${id}/subjects/${subject.id}`);

  useEffect(() => {
    SemesterApi.getSemester(id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSemester(data);
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
      <h1>{semester.name}</h1>
      <h3>Subjects:</h3>
      {semester.subjects ? (
        <TableContainer className={classes.table} component={Paper}>
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: "lightgrey" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Average</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {semester.subjects.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                  onClick={() => {
                    goToSubject(row);
                  }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.average}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </Grid>
  );
};

export default Semester;
