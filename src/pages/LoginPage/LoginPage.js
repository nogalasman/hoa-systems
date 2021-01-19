import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import './LoginPage.css';

function LoginPage(props) {
    const [email, setEmail] = useState("bob.sponge@gmail.com");
    const [pwd, setPwd] = useState("123");
    const [showLoginError, setShowLoginError] = useState(false);
    const [redirectToHomePage, setRedirectToHomePage] = useState(false);
    const { users, onLogin } = props;

    function login() {

        const userFound = users.find(user => user.email.toLowerCase() === email.toLowerCase() && user.pwd === pwd);
        if (userFound) {
            onLogin(userFound);
            setRedirectToHomePage(true);
        } else {
            setShowLoginError(true);
        }
    }


    if (redirectToHomePage) {
        return <Redirect to="/" />;
    }

    return (
        <div className="p-login">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '50vh' }}
            >
                <div className="home-container">
                <Typography component="h1" variant="h5">
                    Log in
   </Typography>
                {showLoginError ? <Alert severity="error">Invalid Credentials!</Alert> : null}
                <form >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Email Address" value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password" value={pwd} onChange={e => setPwd(e.target.value)}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary" block onClick={login}
                    >
                        Log In
      </Button>
                </form>
                </div>
            </Grid>
        </div>
    )

}

export default LoginPage;