import VotingsCard from '../../components/VotingsCard/VotingsCard';
import './VotingsPage.css';

function VotingsPage(props) {
    const { votings, usersNum } = props;

    return(
        <div className="p-votings">
            <div className="content-item">
                <h1>Active Votings</h1>
                <VotingsCard className="content-item" votings={votings.filter(v => v.isActiveVoting())} usersNum={usersNum}></VotingsCard></div>
            <div className="content-item">
                <h1>Voting Results</h1>
                <VotingsCard className="content-item" votings={votings.filter(v => !v.isActiveVoting())} usersNum={usersNum}></VotingsCard></div>
        </div>
    );
}

export default VotingsPage;