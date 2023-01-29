import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './HoverCard.css'

const HoverCard = (props) => {
  const { image, title, overview, vote_average } = props
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {vote_average}/10
        </Typography>
      </CardContent>
      <CardActions>
        <button className='hover-play-button'>Play</button>
        <button className='hover-trailer-button'>Watch Trailer</button>
      </CardActions>
    </Card>
  );
}

export default HoverCard;
