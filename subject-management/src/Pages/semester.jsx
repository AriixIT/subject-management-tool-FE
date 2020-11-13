import { React, useState, useEffect, Fragment } from "react";
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
import Button from "@material-ui/core/Button";
import BasicForm from "../Components/forms/basicForm";

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

  const updateSemester = (values) => {
    console.log(values.name);
    SemesterApi.updateSemester(id, {
      id: id,
      name: values.name,
      subjects: semester.subjects,
    })
      .then((res) => res.json())
      .then((data) => {
        setSemester(data);
      });
  };

  const getSemester = () => {
    SemesterApi.getSemester(id)
      .then((res) => res.json())
      .then((data) => {
        setSemester(data);
      });
  };

  useEffect(() => {
    getSemester();
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

        <BasicForm data={semester} submit={updateSemester} />

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
        <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
          Add Subject
        </Button>
      </Grid>
    </Fragment>
  );
};

export default Semester;
