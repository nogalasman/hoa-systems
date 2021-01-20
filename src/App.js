
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
import {getCurrentDateAsStr} from './shared/Utils';

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

  function addComment(messageId, txt) {
    const newComment = {
      "id": comments[comments.length - 1].id + 1,
      "createdBy": activeUser.id,
      "createdAt": getCurrentDateAsStr(),
      "text": txt,
      "messageId": messageId
    }

    setComments(comments.concat(newComment));
  }

  //const activeUserMessages = activeUser ? messages.filter(message => message.createdBy === activeUser.id) : [];

  return (
    <div className="App">
      <ActiveUserContext.Provider value={activeUser}>
      <HoaNavBar onLogout={handleLogout} msgNum={messages.length}/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/login"><LoginPage users={users} onLogin={handleLogin}/></Route>
          <Route exact path="/signup"><SignupPage/></Route>
          <Route exact path="/messages"><MessagesPage messages={messages} users={users} addComment={addComment} comments={comments}/></Route>
        </Switch>
      </HashRouter>
      </ActiveUserContext.Provider>
    </div>
  );
}

export default App;
