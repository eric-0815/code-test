import Carousel from 'react-elastic-carousel'
import './index.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Categories = (props) => {
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
            <div key={index} alt="" style={{
              height: '120px',
              width: '200px',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.backdrop_path})`
            }}>
              <div key={index} item={item} className="categories-title">{item.name}</div>
            </div>
          )
        }
      </Carousel>

    </div>
  );
}

export default Categories;
