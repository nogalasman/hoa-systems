import { useContext } from "react";
import { Redirect } from "react-router-dom";
import MessageCard from "../../components/MessageCard.js/MessageCard";
import ActiveUserContext from "../../shared/ActiveUserContext";
import './MessagePage.css';

function MessagesPage(props) {
    const activeUser = useContext(ActiveUserContext);
    const { messages, users, comments, addComment } = props;

    const messagesView = messages.map(message => <MessageCard key={message.id} message={message} users={users}  addComment={addComment} comments={comments.filter(comment => comment.messageId === message.id)}></MessageCard>);

    if (!activeUser) {
        return <Redirect to="/login" />
    } else {
        return (
            <div className="p-messages">
                <dl className="accordion">
                    {messagesView}
                </dl>
            </div>
        )
    }

}

export default MessagesPage;