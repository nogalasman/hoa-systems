import { AppBar, Avatar, Badge, IconButton, Link, Toolbar, Typography } from "@material-ui/core";
import { useContext } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import ActiveUserContext from "../../shared/ActiveUserContext";
import MessageIcon from '@material-ui/icons/Message';
import './HoaNavBar.css';

function HoaNavBar(props) {
    const activeUser = useContext(ActiveUserContext);
    const { onLogout } = props;
    const [redirectTo, setRedirectTo] = useState("");

    if (redirectTo) {
        return <Redirect to={redirectTo}/>
      } else {
        return (
            <div class="c-hoa-navbar">
                <AppBar position="static">
                <Toolbar class="nav-container">
                    <Link href="#">
                    <Typography variant="h4">
                    HOA Systems
                    </Typography>
                    </Link>
                    {activeUser ? <h3>Hello {activeUser.fname} {activeUser.lname}</h3> : null}
                    {activeUser ? null : <Link href="#/login">Login</Link>}
                    {activeUser ? null : <Link href="#/signup">Signup</Link>}
                    {activeUser ?  
                    <div class="user-container">
                        <IconButton aria-label="show 4 new mails" color="inherit" onClick={() => setRedirectTo("messages")}>
                        <Badge badgeContent={4} color="secondary">
                        <MessageIcon fontSize="large" />
                        </Badge>
                    </IconButton>
                        <Avatar alt="Remy Sharp" src="https://imgix.ranker.com/node_img/128/2558573/original/spongebob-squarepants-tv-characters-photo-1?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2" />
                        <Link href="#" onClick={() => onLogout()}>Logout</Link>
                    </div>
                    : null}
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default HoaNavBar;