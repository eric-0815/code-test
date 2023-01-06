import Carousel from 'react-elastic-carousel'
import './Categories.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Categories(props) {
  const { movies, genres } = props
  const someMovies = movies.slice(-genres.length, movies.length)
  let items = []
  genres.map((genre, index) => {
    const { name } = genre
    const { backdrop_path } = someMovies[index]
    return items.push({ name, backdrop_path })
  })

  return (
    <div>
      <div className="new-section">Categories</div>
      <Carousel breakPoints={breakPoints}>
        {
          items.map((item, index) =>
            <div key={index} alt="" className="new-picture" style={{ backgroundImage: `url(${item.backdrop_path})` }}>
              <div key={index} item={item} className="categories-title">{item.name}</div>
            </div>
          )
        }
      </Carousel>

    </div>
  );
}

export default Categories;
