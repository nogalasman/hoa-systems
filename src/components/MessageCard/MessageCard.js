import { useState } from "react";
import Comments from "../Comments/Comments";
import MessageDetailsCard from "../MessageDetailsCard/MessageDetailsCard";
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import './MessageCard.css';

function MessageCard(props) {
    const { message, users, comments, addComment } = props;
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="c-message-card">
            <dt className={expanded ? 'title is-expanded' : 'title'} onClick={() => setExpanded(!expanded)}>
                <span className="title-icon">{message.priority === 2 ? <InfoIcon/> : <span className="red-color"><WarningIcon/></span>}</span> {message.title} 
            </dt>
            <dd className={expanded ? 'content is-expanded' : 'content'} >
                <div className="message-card-content">
                    <div className="content-item"><MessageDetailsCard message={message} createdBy={users.find(u => u.id === message.createdBy)}></MessageDetailsCard></div>
                    <div className="content-item"><Comments messageId={message.id} users={users} comments={comments} addComment={addComment}></Comments></div>
                </div>
            </dd>
        </div>
    );
}

export default MessageCard;