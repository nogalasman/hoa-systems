
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/signup"><SignupPage/></Route> */}
          <Route exact path="/messages"><MessagesPage /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
