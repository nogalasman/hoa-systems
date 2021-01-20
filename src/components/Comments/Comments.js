import { Avatar, Card, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import './Comments.css';

function Comments(props) {
    const { messageId, users, comments } = props;

    const commentsView = comments.map(comment => {
        const user = users.find(u => u.id === comment.createdBy);
        return <ListItem button>
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
                    <span className="bold-font">Comments:</span><br />
                    <List component="nav" aria-label="components list">
                        {commentsView}
                    </List>
                </Typography>

            </Card>
        </div>
    );
}

export default Comments;