import { useState } from "react";
import './MessageCard2.css';

function MessageCard2(props) {
    const { message } = props;
    const [ expanded, setExpanded ] = useState(false);

    return (
        <div className="c-message-card2">
                <dt className={expanded ? 'title is-expanded' : 'title'} onClick={() => setExpanded(!expanded)}>
                    {message.title}
                </dt>
                <dd className={expanded ? 'content is-expanded' : 'content'} onClick={() => setExpanded(!expanded)}>
                    <p>{message.details}</p>
                </dd>
        </div>
    );
}

export default MessageCard2;