class VotingModel {
    constructor(plainVotingOrid, createdBy, createAt, title, details, options, dueDate) {
        if (typeof plainVotingOrid === 'object') {
            this.id = plainVotingOrid.id;
            this.createdBy = plainVotingOrid.createdBy;
            this.createAt = plainVotingOrid.createAt;
            this.title = plainVotingOrid.title;
            this.details = plainVotingOrid.details;
            this.options = plainVotingOrid.options;
            this.dueDate = plainVotingOrid.dueDate;
        } else {
            this.id = plainVotingOrid;
            this.createdBy = createdBy;
            this.createAt = createAt;
            this.title = title;
            this.details = details;
            this.options = options;
            this.dueDate = dueDate;
        }

        const calculatedVotes = [];
        for (let i = 0; i < this.options.length; i++) {
            calculatedVotes.push(0);
        }

        this.calculatedVotes = calculatedVotes;
        this.result = "";
    }

    //TODO: enable multiple results (more than one result with the same number of votes)
    calculateVotes(votes) {
        const calcVotes = this.calculatedVotes;
        let result = this.options[0];
        let nVotes = 0;
        for (const vote of votes) {
            let idx = this.options.findIndex(option => option === vote.vote);
            if (idx >= 0) {
                calcVotes[idx]++;
                if (calcVotes[idx] > nVotes) {
                    nVotes = calcVotes[idx];
                    result = this.options[idx];
                }
            }
        }
        this.calculatedVotes = calcVotes;
        this.result = result;
    }

    isActiveVoting = () => {
        const today = new Date();
        const vdate = new Date(this.dueDate);
        return today < vdate;
    }

}

export default VotingModel;