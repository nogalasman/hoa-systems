import { Typography } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import ActiveUserContext from "../../shared/ActiveUserContext";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';


const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

function MessagesPage(props) {
    const activeUser = useContext(ActiveUserContext);
    const { messages } = props;
    const [expanded, setExpanded] = useState('panel'+messages[0].id);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const messagesView = messages.map(message => <Accordion  key={message.id} square expanded={expanded === 'panel'+message.id} 
                            onChange={handleChange('panel'+message.id)}>
                            <AccordionSummary aria-controls={"panel"+message.id+"d-content"} id={"panel"+message.id+"d-header"}>
                            <Typography>{message.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            {message.details}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>)

    if (!activeUser) {
        return <Redirect to="/login"/>
    } else {
        return (
            <div className="p-messages">
                {messagesView}
            </div>
            )
    }

}

export default MessagesPage;