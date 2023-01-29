
import './index.css'

const MainPage = (props) => {
    const { movie } = props
    const { backdrop_path, title, overview, vote_average } = movie
    return (
        <div className='main-container'>
            <div alt="" className="main-background" style={{ backgroundImage: `url(${backdrop_path})` }}>
                <div className="main-title">{title}</div>
                <div className="main-overview">{overview}</div>
                <div className='main-rating-container'>
                    <div className="main-imbd">IMDb</div>
                    <div className="main-rating">{vote_average}/ 10</div>
                </div>
                <div className="main-button-row">
                    <button className="main-play-button">Play</button>
                    <button className="main-trailer-button">Watch Trailer</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
