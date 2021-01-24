import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from 'react';
import AddIcon from "@material-ui/icons/Add";
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
}));

function NewVotingModal(props) {
    const { show, handleClose } = props;
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [optionsList, setOptionsList] = useState([ "" ]);

    const classes = useStyles();

    function closeModal() {
        setTitle("");
        setDetails("");
        handleClose();
    }

    function handleAddMessage() {
        if ((title !== "") && (details !== "")) {
            //addMessage(title, details, priority, imgURL);
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
                    </form>
                </DialogContent>
                <DialogActions className={classes.dialog}>
                    <Button onClick={closeModal} variant="contained" color="secondary" type="button">
                        Cancel
          </Button>
                    <Button variant="contained" color="primary" type="button">
                        Add Voting
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default NewVotingModal;