import db from '../../../../data/db.json'
import './MainPage.css'

function MainPage() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const movie = db.movies[getRandomInt(99)]

    return (
        <div alt="" className="picture" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
            <div className="title">{movie.title}</div>
            <div className="overview">{movie.overview}</div>
            <div className="rating">{movie.vote_average}/ 10</div>
            <div className="button-row">
                <button className="play-button">Play</button>
                <button className="trailer-button">Watch Trailer</button>
            </div>

        </div >
    );
}

export default MainPage;
