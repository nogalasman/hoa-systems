import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './MessageDetailsCard.css';

function MessageDetailsCard(props) {
    const { message, createdBy } = props;
  
    return (
        <div className="c-message-details-card">
        <Card className="card">
          <CardActionArea className="area"> 
            <CardMedia
              className="media"
              image={message.img}
              title="Contemplative Reptile"
            />
            <CardContent
              className="details-content">
              <Typography>
              <span className="bold-font"> Details:</span><br/>
                {message.details}
              </Typography>
              <Typography  gutterBottom>
              <span className="bold-font">Created By:</span>
              </Typography>
              <Avatar alt={createdBy.fname + " " + createdBy.lname} src={createdBy.img} />
              <Typography  gutterBottom>
              <span className="bold-font">Date:</span> { message.createAt }
              </Typography>
              <Typography  gutterBottom>
              <span className="bold-font">Priority:</span> { message.priority === 1 ? "Alert" : "Information" }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
}

export default MessageDetailsCard;