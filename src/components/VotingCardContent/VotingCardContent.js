import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import { Pie } from 'react-chartjs-2';
import { randomColorArr } from '../../shared/Utils';
import './VotingCardContent.css';

function VotingCardContent(props) {
    const { voting, usersNum } = props;

    function getVotingPercentageData() {

        const votesNum = voting.calculatedVotes.filter(x => x>=0).reduce((a, c) => a + c, 0);

        return {
            labels: ['Voted', 'DidNotVoted'],
            datasets: [
                {
                    label: 'Voting Percentage',
                    data: [votesNum, usersNum - votesNum],
                    backgroundColor: randomColorArr(2),
                    hoverBackgroundColor: randomColorArr(2),

                },
            ],
        }
    }

    function getVotingResultsData() {

        return {
            labels: voting.options,
            datasets: [
                {
                    label: 'Voting Percentage',
                    data: voting.calculatedVotes,
                    backgroundColor: randomColorArr(voting.options.length),
                    hoverBackgroundColor: randomColorArr(voting.options.length),

                },
            ],
        }
    }

    return (
        <div className="c-voting-card-content">
            <Card className="card">
                <CardActionArea className="area">
                    <CardContent>
                        <div className="voting-content">
                            <div className="voting-item details-title">
                                <Typography>
                                    <span className="bold-font"> Details:</span><br />
                                    {voting.details}
                                </Typography>
                                <Typography gutterBottom>
                                    <span className="bold-font">{voting.isActiveVoting() ? "End Date: " : "Ended: "}</span> {voting.dueDate}
                                </Typography>
                            </div>
                            <div className="voting-item">
                                {voting.isActiveVoting()? null : <Pie data={getVotingResultsData} width={10} height={5} options={{
                                    title: {
                                        display: true,
                                        align: 'center',
                                        text: 'Voting Results',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    },
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }} />}
                            </div>
                            <div className="voting-item">
                                <Pie data={getVotingPercentageData}  options={{
                                    title: {
                                        display: true,
                                        align: 'center',
                                        text: 'Voting Percentage',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    },
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }} />
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default VotingCardContent;