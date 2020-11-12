import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Index from "./Pages/index";
import NotFound from "./Pages/notFound";
import Semester from "./Pages/semester"
import Subject from "./Pages/subject"
import Exam from "./Pages/exam"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/semesters" component={Index}/>
        <Route exact path="/semesters/:id" component={Semester}/>
        <Route exact path="/semesters/:semesterid/subjects/:id" component={Subject}/>
        <Route exact path="/semesters/:semesterid/subjects/:subjectid/exams/:id" component={Exam}/>
        <Route exact path="/404" component={NotFound}/>
        <Redirect from="/" to="/semesters"/>
        <Redirect to="/404"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
