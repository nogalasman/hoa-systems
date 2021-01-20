import { useState } from "react";
import Comments from "../Comments/Comments";
import MessageDetailsCard from "../MessageDetailsCard/MessageDetailsCard";
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import './MessageCard.css';

function MessageCard(props) {
    const { message, users, comments } = props;
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="c-message-card">
            <dt className={expanded ? 'title is-expanded' : 'title'} onClick={() => setExpanded(!expanded)}>
                <span className="title-icon">{message.priority === 1 ? <InfoIcon/> : <span className="red-color"><WarningIcon/></span>}</span> {message.title} 
            </dt>
            <dd className={expanded ? 'content is-expanded' : 'content'} onClick={() => setExpanded(!expanded)}>
                <div className="message-card-content">
                    <div className="content-item"><MessageDetailsCard message={message}></MessageDetailsCard></div>
                    <div className="content-item"><Comments messageId={message.id} users={users} comments={comments}></Comments></div>
                </div>
            </dd>
        </div>
    );
}

export default MessageCard;