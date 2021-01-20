import { Avatar, Button, Card, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import './Comments.css';

function Comments(props) {
    const { messageId, users, comments, addComment } = props;
    const [newComment, setNewComment] = useState("");

    function handleAddComment(e) {
        if (newComment !== ""){
            addComment(messageId, newComment);
            setNewComment("");
        }
    }

    const commentsView = comments.map(comment => {
        const user = users.find(u => u.id === comment.createdBy);
        return <ListItem button key={comment.id}>
            <ListItemIcon>
                <Avatar alt={user.fname + " " + user.lname} src={user.img} />
            </ListItemIcon>
            <ListItemText>{comment.text}</ListItemText>
        </ListItem>
    });
    return (
        <div className="c-comments-card">
            <Card className="comments-card-content">
                <Typography>
                    <span className="bold-font">Comments:</span>
                    </Typography>
                    <List component="nav" aria-label="components list">
                        {commentsView}
                    </List>
                
                <TextField id="outlined-basic" label="New Comment" variant="outlined"
                    multiline value={newComment} fullWidth={true}
                    rows={4} onChange={e => setNewComment(e.target.value)} />
                <Button variant="contained" color="secondary" onClick={handleAddComment}>
                    Add Comment
            </Button>
            </Card>

        </div>
    );
}

export default Comments;