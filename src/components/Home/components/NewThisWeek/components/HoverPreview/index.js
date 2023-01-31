import React, { useState } from "react";
import HoverableDiv from './components/HoverableDiv'
import HoverCard from './components/HoverCard'
import Backdrop from '@mui/material/Backdrop';
import './index.css'

const HoverPreview = (props) => {
  const { image, title, overview, vote_average, isSmall } = props

  const [isHovering, setIsHovering] = useState(false);

  const handleOpen = () => {
    setIsHovering(true);
  };

  const handleClose = () => {
    setIsHovering(false);
  };


  return (
    <div>
      <HoverableDiv
        image={image}
        title={title}
        handleOpen={handleOpen}
        isSmall={isSmall}
      />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isHovering}
        onClick={handleClose}
      >
        <HoverCard
          image={image}
          title={title}
          overview={overview}
          vote_average={vote_average} />
      </Backdrop>
    </div >
  );
};

export default HoverPreview;
