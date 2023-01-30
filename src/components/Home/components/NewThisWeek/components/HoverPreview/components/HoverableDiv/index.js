const HoverableDiv = ({ handleOpen, image, title }) => {
  const slicedTitle = title.length > 8 ? title.slice(0, 8) + '...' : title
  return (
    <div onClick={handleOpen} className='new-this-week-hoverable-div'>
      <img src={image} alt={title} className='new-this-week-picture' key={title}></img>
      <div>{slicedTitle}</div>
    </div>
  );
};

export default HoverableDiv;