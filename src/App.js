
import QuizList from './components/quiz/quiz';
import QuizDetails from './components/quiz/quizDetailsRender';
import Home from './pages/Home';
import Nav from './components/nav/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (


<Router>
<div>
  <nav>
    <Nav/>
  </nav>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
  <Switch>
    <Route path="/quizDetails">
      <QuizDetails />
    </Route>
    <Route path="/quizList">
      <QuizList />
    </Route>
    <Route path="/login">
      <Home/>
    </Route>
    <Route path="/">
    </Route>
  </Switch>
</div>
</Router>
  );
}

export default App;
