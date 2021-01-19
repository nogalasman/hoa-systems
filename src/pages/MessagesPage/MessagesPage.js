import { Typography } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import ActiveUserContext from "../../shared/ActiveUserContext";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MessageCard from "../../components/MessageCard.js/MessageCard";




function MessagesPage(props) {
    const activeUser = useContext(ActiveUserContext);
    const { messages } = props;
    

    const messagesView = messages.map(message => <MessageCard  key={message.id} message={message}>
                        </MessageCard>);

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