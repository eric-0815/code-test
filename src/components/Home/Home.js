import MainPage from './components/MainPage/MainPage'
import NewThisWeek from './components/NewThisWeek/NewThisWeek'
import Categories from './components/Categories/Categories'
import './Home.css'
import db from '../../data/db.json'


function Home() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const { movies, genres } = db
    const movie = movies[getRandomInt(99)]
    return (
        <div className='home' >
            <MainPage movie={movie} />
            <NewThisWeek movies={movies} />
            <Categories movies={movies} genres={genres} />
        </div>
    );
}

export default Home;
