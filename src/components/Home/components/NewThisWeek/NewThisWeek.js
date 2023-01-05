import './NewThisWeek.css'
import Grid from '@mui/material/Grid';

function NewThisWeek(props) {
  const { movies } = props
  const someMovies = movies.slice(0, 6)
  // <div alt="" className="picture" style={{ backgroundImage: `url(${backdrop_path})` }}>
  return (
    <div>
      <div className="new-section">New This Week</div>
      <Grid container spacing={10} className='new-grid'>
        {someMovies.map(movie => {
          const { backdrop_path, title } = movie
          return (<Grid item xs={2}>
            <img src={backdrop_path} alt={title} className='new-picture'></img>
            <div className='new-title'>{title}</div>
          </Grid>
          )
        })}
      </Grid>
    </div >

  );
}

export default NewThisWeek;
