import { AppBar, Avatar, Badge, IconButton, Link, Toolbar, Typography } from "@material-ui/core";
import { useContext } from "react";
import ActiveUserContext from "../../shared/ActiveUserContext";
import MessageIcon from '@material-ui/icons/Message';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import './HoaNavBar.css';

function HoaNavBar(props) {
    const activeUser = useContext(ActiveUserContext);
    const { onLogout, msgNum, votingsNum } = props;

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
                        <div>
                            <Link href="#dashboard" ><IconButton aria-label="show dashboard" color="inherit">
                                <DashboardIcon fontSize="large" />
                            </IconButton></Link>
                            <Link href="#/messages" ><IconButton aria-label="show new messages" color="inherit">
                                <Badge badgeContent={msgNum} color="secondary">
                                    <MessageIcon fontSize="large" />
                                </Badge>
                            </IconButton></Link>
                            <Link href="#/votings" ><IconButton aria-label="show votings" color="inherit">
                                <Badge badgeContent={votingsNum} color="secondary">
                                    <ThumbUpIcon fontSize="large" />
                                </Badge>
                            </IconButton></Link>
                        </div>
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