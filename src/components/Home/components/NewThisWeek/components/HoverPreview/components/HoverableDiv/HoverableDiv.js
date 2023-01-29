const HoverableDiv = ({ handleMouseOver, handleMouseOut, image, title }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={image} alt={title} className='new-this-week-picture' key={title}></img>
      <div>{title}</div>
    </div>
  );
};

export default HoverableDiv;