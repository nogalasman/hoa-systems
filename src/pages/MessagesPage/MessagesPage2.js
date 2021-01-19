import { useContext } from "react";
import { Redirect } from "react-router-dom";
import MessageCard2 from "../../components/MessageCard.js/MessageCard2";
import ActiveUserContext from "../../shared/ActiveUserContext";
import './MessagePage2.css';

function MessagesPage2(props) {
    const activeUser = useContext(ActiveUserContext);
    const { messages } = props;

    const messagesView = messages.map(message => <MessageCard2 key={message.id} message={message} ></MessageCard2>);

    if (!activeUser) {
        return <Redirect to="/login" />
    } else {
        return (
            <div className="p-messages2">
                 <dl className="accordion">
                        { messagesView }
                </dl>
            </div>
        )
    }

}

export default MessagesPage2;