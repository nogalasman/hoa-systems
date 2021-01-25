import './NewVoteCard.css';
import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dialog: {
        backgroundColor: '#e8f4fc',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
        backgroundColor: '#e8f4fc'

    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 500,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    imgPreview: {
        width: 200,
    },
}));

function NewVoteCard(props) {
    const { voting, addVote } = props;
    const [option, setOption] = useState("");

    const classes = useStyles();

    const optionsView = () => {

        const dataView = voting.options.map(option =>
            <MenuItem value={option}>{option}</MenuItem>);
        return dataView;
    }

    function handleAddVote() {
        addVote(voting.id, option);
        setOption("");
    }

    return (
        <div>
            <form className={classes.form} noValidate>
                <FormControl className={classes.formControl}>

                    <InputLabel id="filter-option-label">Your Vote</InputLabel>
                    <Select
                        labelId="filter-option-label"  variant="filled"
                        id="filter-option" value={option}
                        onChange={(e) => setOption(e.target.value)}
                    >
                        {optionsView()}
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" type="button"  onClick={handleAddVote}>
                    Submit Vote
          </Button>
            </form>
        </div>
    );
}

export default NewVoteCard;