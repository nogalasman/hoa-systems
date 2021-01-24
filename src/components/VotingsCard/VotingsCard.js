
import { Redirect } from 'react-router-dom';
import { useContext } from "react";
import ActiveUserContext from "../../shared/ActiveUserContext";

import './VotingsCard.css';
import VotingCard from '../VotingCard/VotingCard';

function VotingsCard(props) {
    const { votings, usersNum } = props;
    const activeUser = useContext(ActiveUserContext);

    const votingsView = () => {

        const dataView = votings.map(voting =>
            <VotingCard key={voting.id} voting={voting} usersNum={usersNum} ></VotingCard>);
        return dataView;
    }

    if (!activeUser) {
        return <Redirect to="/login" />
    } else {
        return (
            <div className="c-votings-card">
                <dl className="accordion">
                    {votingsView()}
                </dl>
            </div>
        )
    }
}

export default VotingsCard;