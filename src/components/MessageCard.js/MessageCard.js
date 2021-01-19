import { useState } from "react";
import MessageDetailsCard from "../MessageDetailsCard/MessageDetailsCard";
import './MessageCard.css';

function MessageCard(props) {
    const { message } = props;
    const [ expanded, setExpanded ] = useState(false);

    return (
        <div className="c-message-card">
                <dt className={expanded ? 'title is-expanded' : 'title'} onClick={() => setExpanded(!expanded)}>
                    {message.title}
                </dt>
                <dd className={expanded ? 'content is-expanded' : 'content'} onClick={() => setExpanded(!expanded)}>
                    <MessageDetailsCard message={ message }></MessageDetailsCard>
                </dd>
        </div>
    );
}

export default MessageCard;