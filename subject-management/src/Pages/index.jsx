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
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
  },
});

const Index = (props) => {
  const classes = useStyles();

  const [semesters, setSemesters] = useState([]);

  const goToSemester = (semester) =>
    props.history.push(`/semesters/${semester.id}`);

  useEffect(() => {
    SemesterApi.getSemesters()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSemesters(data);
      });
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <h1>Semesters</h1>
      <Button variant="contained" color="primary" style={{ marginBottom: 10 }}>
        Add Semester
      </Button>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "lightgrey" }}>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {semesters.map((row) => (
              <TableRow
                hover
                key={row.id}
                onClick={() => {
                  goToSemester(row);
                }}
              >
                <TableCell>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Index;
