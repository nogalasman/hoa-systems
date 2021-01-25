import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import MessageCard from '../../components/MessageCard/MessageCard';
import VotingsCard from '../../components/VotingsCard/VotingsCard';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './DashboardPage.css';

function DashboardPage(props) {
    const { messages, users, addComment, comments, calculatedVotings, votes, addVote } = props;
    const activeUser = useContext(ActiveUserContext);

    function sortByDate(a, b) {
        return new Date(b.date) - new Date(a.date);
    }

    const newMessagesView = () => {

        let data = messages.sort(sortByDate).slice(0, 3);

        const dataView = data.map(message =>
            <MessageCard key={message.id} message={message} users={users} addComment={addComment} comments={comments.filter(comment => comment.messageId === message.id)}></MessageCard>);
        return dataView;
    }

    if (!activeUser) {
        return <Redirect to="/login" />
    } else {
        return (
            <div className="p-dashboard">
                <div className="new-messages">
                    <h1>New Messages</h1>
                    <dl className="accordion">
                        {newMessagesView()}
                    </dl>
                </div>
                <div className="votings">
                    <div className="content-item">
                        <h1>Voting Results</h1>
                        <VotingsCard votings={calculatedVotings.filter(voting => !voting.isActiveVoting())} usersNum={users.length}></VotingsCard>
                    </div>
                    <div className="content-item">
                        <h1>Pending Votings</h1>
                        <VotingsCard addVote={addVote} votings={calculatedVotings.filter(voting => voting.isActiveVoting() && !votes.some(vote => vote.votingId === voting.id && vote.votedBy === activeUser.id))} usersNum={users.length}></VotingsCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;