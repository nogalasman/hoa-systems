import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './HomePage.css';

function HomePage(props) {
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/login"/>
      } else {
    return (
        <div className="p-home">
            <Typography variant="h4">
                    Homeowner Association Management System
            </Typography>
        </div>
    )
      }

}

export default HomePage;