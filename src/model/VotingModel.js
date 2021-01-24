class VotingModel {
    constructor(plainVotingOrid, id, createdBy, createAt, title, details, options, dueDate) {
        if (typeof plainVotingOrid === 'object') {
            this.id = plainVotingOrid.id;
            this.createdBy = plainVotingOrid.createdBy;
            this.createAt = plainVotingOrid.createAt;
            this.title = plainVotingOrid.title;
            this.details = plainVotingOrid.details;
            this.options = plainVotingOrid.options;
            this.dueDate = plainVotingOrid.dueDate;
        } else {
            this.id = id;
            this.createdBy = createdBy;
            this.createAt = createAt;
            this.title = title;
            this.details = details;
            this.options = options;
            this.dueDate = dueDate;
        }
    }

    //TODO: enable multiple results (more than one result with the same number of votes)
    calculateVotes(votes) {
        const calculatedVotes = [];
        for (let i = 0; i <= this.options.length; i++) {
            calculatedVotes.push(0);
        }

        let result = this.options[0];
        let nVotes = 0;
        for (const vote of votes) {
            let idx = this.options.findIndex(option => option === vote.vote);
            if (idx >= 0) {
                calculatedVotes[idx]++;
                if (calculatedVotes[idx] > nVotes) {
                    nVotes = calculatedVotes[idx];
                    result = this.options[idx];
                }
            }
        }
        this.calculatedVotes = calculatedVotes;
        this.result = result;
    }

    isActiveVoting = () => {
        const today = new Date();
        const vdate = new Date(this.dueDate);
        return today < vdate;
    }

}

export default VotingModel;