
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import jsonUsers from './data/users.json';
import jsonMessages from './data/messages.json';
import jsonComments from './data/comments.json';
import { useState } from 'react';
import ActiveUserContext from './shared/ActiveUserContext';
import HoaNavBar from './components/HoaNavBar/HoaNavBar';
import MessagesPage from './pages/MessagesPage/MessagesPage';

function App() {
  const [users, setUsers] = useState(jsonUsers);        
  const [messages, setMessages] = useState(jsonMessages); 
  const [comments, setComments] = useState(jsonComments);         
  const [activeUser, setActiveUser] = useState(jsonUsers[0]); 

  function handleLogout() {
    setActiveUser(null);
  }

  function handleLogin(loggedinUser) {
    setActiveUser(loggedinUser);
  }

  const activeUserMessages = activeUser ? messages.filter(message => message.createdBy === activeUser.id) : [];
  console.log(JSON.stringify(activeUserMessages));
  console.log(JSON.stringify(activeUser));

  return (
    <div className="App">
      <ActiveUserContext.Provider value={activeUser}>
      <HoaNavBar onLogout={handleLogout} msgNum={activeUserMessages.length}/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/login"><LoginPage users={users} onLogin={handleLogin}/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
          <Route exact path="/messages"><MessagesPage messages={activeUserMessages} users={users} comments={comments}/></Route>
        </Switch>
      </HashRouter>
      </ActiveUserContext.Provider>
    </div>
  );
}

export default App;
