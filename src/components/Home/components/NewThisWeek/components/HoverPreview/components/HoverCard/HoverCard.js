import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './HoverCard.css'

function HoverCard(props) {
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
        <Button size="small" className='hover-play-button '>Play</Button>
        <Button size="small" className='hover-trailer-button'>Watch Trailer</Button>
      </CardActions>
    </Card>
  );
}

export default HoverCard;
