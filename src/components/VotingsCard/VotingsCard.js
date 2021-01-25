import './VotingsCard.css';
import VotingCard from '../VotingCard/VotingCard';
import { Alert } from '@material-ui/lab';

function VotingsCard(props) {
    const { votings, usersNum, addVote } = props;

    const votingsView = () => {

        const dataView = votings.map(voting =>
            <VotingCard key={voting.id} voting={voting} usersNum={usersNum} addVote={addVote}></VotingCard>);

        return dataView;
    }

    return (
        <div className="c-votings-card">
            {(votings.length > 0) ?
                <dl className="accordion">
                    {votingsView()}
                </dl>
                : <Alert severity="error">There are no votes</Alert>}
        </div>
    )
}

export default VotingsCard;