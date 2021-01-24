import { useState } from 'react';
import VotingCardContent from '../VotingCardContent/VotingCardContent';
import './VotingCard.css';

function VotingCard(props){
    const { voting, usersNum } = props;
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div className="c-voting-card">
            <dt className={expanded ? 'title is-expanded' : 'title'} onClick={() => setExpanded(!expanded)}>
                <span className="title-icon">{voting.title}</span> <span className="result-title">{voting.isActiveVoting() ? null : "Result: "+ voting.result}</span>
            </dt>
            <dd className={expanded ? 'content is-expanded' : 'content'} >
                <div className="voting-card-content">
                    <div className="content-item"><VotingCardContent voting={voting} usersNum={usersNum}></VotingCardContent></div>
                </div>
            </dd>
        </div>
    );
}

export default VotingCard;