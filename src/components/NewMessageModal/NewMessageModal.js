import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from 'react';
import './NewMessageModal.css';
import AddIcon from "@material-ui/icons/Add";
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

function NewMessageModal(props) {
    const { show, handleClose, addMessage } = props;
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [priority, setPriority] = useState("alert");
    const [img, setImg] = useState(null);

    const classes = useStyles();

    function closeModal() {
        setTitle("");
        setDetails("");
        setPriority("alert");
        setImg(null);
        handleClose();
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(null);
        }
    }

    const imgURL = img ? URL.createObjectURL(img) : "";

    function handleAddMessage() {
        if ((title !== "") && (details !== "")) {
            addMessage(title, details, priority, imgURL);
        }

        closeModal();
    }

    return (
        <div className="c-new-message-modal">
            <Dialog
                open={show}
                keepMounted
                onClose={handleClose}
                aria-labelledby="message-dialog-slide-title"
                aria-describedby="message-dialog-slide-description"
                fullWidth={true}
                maxWidth={'md'}
            >
                <DialogTitle className={classes.dialog} id="message-dialog-slide-title">Add A New Message</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <form className={classes.form} noValidate>
                        <FormControl className={classes.formControl}>
                            <TextField id="message-title" variant="filled" label="Message Title" value={title} onChange={e => setTitle(e.target.value)} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField id="message-details" variant="filled" multiline rows={8} label="Message Details" value={details} onChange={e => setDetails(e.target.value)} />
                        </FormControl>
                        <FormControl className={classes.formControl}>

                            <InputLabel id="filter-priority-label">Priority</InputLabel>
                            <Select
                                labelId="filter-priority-label"
                                id="filter-priority" value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <MenuItem value="alert">Alert</MenuItem>
                                <MenuItem value="information">Information</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <label htmlFor="upload-photo">
                                <input
                                    style={{ display: "none" }}
                                    id="upload-photo"
                                    name="upload-photo"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <Fab
                                    color="secondary"
                                    size="small"
                                    component="span"
                                    aria-label="add"
                                    variant="extended"
                                >
                                    <AddIcon /> Upload Image
                                </Fab>
                            </label>
                        </FormControl>
                        <img alt="new message" src={imgURL} className={classes.imgPreview} style={imgURL ? { "display": "block" } : { "display": "none" }}></img>
                    </form>
                </DialogContent>
                <DialogActions className={classes.dialog}>
                    <Button onClick={closeModal} variant="contained" color="secondary" type="button">
                        Cancel
          </Button>
                    <Button onClick={handleAddMessage} variant="contained" color="primary" type="button">
                        Add Message
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NewMessageModal;