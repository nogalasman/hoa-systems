import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './NewVotingModal.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    dialog: {
        backgroundColor: 'rgba(0, 151, 19, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',

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
    newOption: {
        display: 'flex',
        alignItems: "center"
    },
}));

function NewVotingModal(props) {
    const { show, handleClose, addVoting } = props;
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [endDate, setEndDate] = useState("");
    const [optionsList, setOptionsList] = useState([""]);

    const classes = useStyles();

    function closeModal() {
        setTitle("");
        setDetails("");
        setEndDate("");
        setOptionsList([""]);
        handleClose();
    }

    const handleOptionsInputChange = (e, index) => {
        const option = e.target.value;
        const list = [...optionsList];
        list[index] = option;
        setOptionsList(list);

    };

    const handleAddOptionClick = () => {
        setOptionsList([...optionsList, ""]);
    };

    function handleAddVoting() {
        if ((title !== "") && (details !== "")) {
            addVoting(title, details, optionsList, endDate);
        }

        closeModal();
    }

    return (
        <div className="c-new-voting-modal">
            <Dialog
                open={show}
                keepMounted
                onClose={handleClose}
                aria-labelledby="voting-dialog-slide-title"
                aria-describedby="voting-dialog-slide-description"
                fullWidth={true}
                maxWidth={'md'}
            >
                <DialogTitle className={classes.dialog} id="voting-dialog-slide-title">Add A New Voting</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <form className={classes.form} noValidate>
                        <FormControl className={classes.formControl}>
                            <TextField id="voting-title" variant="filled" label="Voting Title" value={title} onChange={e => setTitle(e.target.value)} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField id="voting-details" variant="filled" multiline rows={8} label="Voting Details" value={details} onChange={e => setDetails(e.target.value)} />
                        </FormControl>
                        {optionsList.map((x, i) => {
                            return (
                                <div className={classes.newOption} key={i}>
                                    <FormControl className={classes.formControl}>
                                        <TextField id="new-option" variant="filled" label="Voting option" value={x} onChange={e => handleOptionsInputChange(e, i)} />
                                    </FormControl>
                                    {optionsList.length - 1 === i && <AddCircleIcon onClick={handleAddOptionClick} />}
                                </div>
                            );
                        })}
                        <TextField
                            id="datetime-local"
                            label="End Date"
                            type="datetime-local"
                            variant="filled"
                            defaultValue={endDate}
                            onChange={e => setEndDate(e.target.value)}
                            className={classes.formControl}
                            InputLabelProps={{
                                shrink: true,
                            }}></TextField>
                    </form>
                </DialogContent>
                <DialogActions className={classes.dialog}>
                    <Button onClick={closeModal} variant="contained" color="secondary" type="button">
                        Cancel
          </Button>
                    <Button onClick={handleAddVoting} variant="contained" color="primary" type="button">
                        Add Voting
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default NewVotingModal;