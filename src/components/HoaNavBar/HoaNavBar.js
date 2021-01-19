import { AppBar, Avatar, Badge, IconButton, Link, Toolbar, Typography } from "@material-ui/core";
import { useContext } from "react";
import ActiveUserContext from "../../shared/ActiveUserContext";
import MessageIcon from '@material-ui/icons/Message';
import './HoaNavBar.css';

function HoaNavBar(props) {
    const activeUser = useContext(ActiveUserContext);
    const { onLogout, msgNum } = props;

        return (
            <div className="c-hoa-navbar">
                <AppBar position="static" className="menu-container">
                <Toolbar className="nav-container">
                    <Link href="#">
                    <Typography variant="h4">
                    HOA Systems
                    </Typography>
                    </Link>
                    {activeUser ?  
                    <div className="user-container">
                        <h3>Hello {activeUser.fname} {activeUser.lname}</h3>
                        <Avatar alt={activeUser.fname + " " + activeUser.lname} src={activeUser.img} className="user-img" />
                        
                    </div>
                    : null}
                    {activeUser ?  
                    <Link href="#/messages" ><IconButton aria-label="show new messages" color="inherit">
                        <Badge badgeContent={msgNum} color="secondary">
                        <MessageIcon fontSize="large" />
                        </Badge>
                    </IconButton></Link>
                    : null}
                    {
                    activeUser ? null : 
                    <div className="links-container">
                        <Link href="#/login">Login</Link> <Link href="#/signup" >Signup</Link>
                    </div>
                    }
                    {activeUser ? <Link href="#" onClick={onLogout}>Logout</Link> : null}
                    
                </Toolbar>
                </AppBar>
            </div>
        )
}

export default HoaNavBar;