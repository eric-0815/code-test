const HoverableDiv = ({ handleMouseOver, handleMouseOut, image, title }) => {
  const slicedTitle = title.length > 8 ? title.slice(0, 8) + '...' : title
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={image} alt={title} className='new-this-week-picture' key={title}></img>
      <div>{slicedTitle}</div>
    </div>
  );
};

export default HoverableDiv;