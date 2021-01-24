import VotingsCard from '../../components/VotingsCard/VotingsCard';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './VotingsPage.css';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import NewVotingModal from '../../components/NewVotingModal/NewVotingModal';

function VotingsPage(props) {
    const { votings, usersNum, addVoting } = props;
    const [filter, setFilter] = useState("");
    const [showModal, setShowModal] = useState(false);

    let notActiveVotings = votings.filter(function (voting) {
        if (voting.isActiveVoting()){
            return false;
        }
        const full = (voting.title + " " + voting.details).toLowerCase();
        return full.includes(filter.toLowerCase());
    });

    return(
        <div className="p-votings">
            <div className="content-item">
                <h1>Active Votings</h1>
                <div className="add-voting-container"><AddCircleOutlineIcon className="add-voting-img" onClick={() => setShowModal(true)}/></div>
                <VotingsCard className="content-item" votings={votings.filter(v => v.isActiveVoting())} usersNum={usersNum}></VotingsCard></div>             
                <NewVotingModal show={showModal} handleClose={() => setShowModal(false)} addVoting={addVoting}/>
            <div className="content-item">
                <h1>Voting Results</h1>
                <div className="filter-control">
                    <SearchIcon className="search-icon" />
                    <TextField className="form-control" label="filter by text in title or details" onChange={e => setFilter(e.target.value)} />
                </div>
                <VotingsCard className="content-item" votings={notActiveVotings} usersNum={usersNum}></VotingsCard></div>
        </div>
    );
}

export default VotingsPage;