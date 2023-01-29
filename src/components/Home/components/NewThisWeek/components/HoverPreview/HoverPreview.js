import React from "react";
import HoverableDiv from './components/HoverableDiv/HoverableDiv'
// import HoverCard from './components/HoverCard/HoverCard'
// import Backdrop from '@mui/material/Backdrop';

const HoverPreview = (props) => {
  // const { image, title, overview, vote_average } = props
  const { image, title } = props
  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  // const handleClose = () => {
  //   setIsHovering(false);
  // };

  return (
    <div>
      <HoverableDiv
        handleMouseOver={false}
        handleMouseOut={false}
        image={image}
        title={title}
      />
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isHovering}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClose}
      > */}
      {/* <HoverCard
          image={image}
          title={title}
          overview={overview}
          vote_average={vote_average} /> 
    </Backdrop>
  */}
    </div >
  );
};

export default HoverPreview;
