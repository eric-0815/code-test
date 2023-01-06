import React, { useState } from "react";
import HoverableDiv from './components/HoverableDiv/HoverableDiv'
import HoverCard from './components/HoverCard/HoverCard'
import Backdrop from '@mui/material/Backdrop';

const HoverPreview = (props) => {
  const { image, title, overview, vote_average } = props

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        image={image}
        title={title}
      />

      {isHovering && <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isHovering}
      >

        <HoverCard
          image={image}
          title={title}
          overview={overview}
          vote_average={vote_average} />
      </Backdrop>}

    </div >
  );
};

export default HoverPreview;
