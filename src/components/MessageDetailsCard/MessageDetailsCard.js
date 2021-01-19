import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './MessageDetailsCard.css';

function MessageDetailsCard(props) {
    const { message } = props;

    return (
        <div className="c-message-details-card">
        <Box my={4}>
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
              <span className="bold-font">Priority:</span> { message.priority === 1 ? "Alert" : "Information" }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      </div>
    );
}

export default MessageDetailsCard;