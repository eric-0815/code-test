import './NewThisWeek.css'
import Grid from '@mui/material/Grid';

function NewThisWeek(props) {
  const { movies } = props
  const someMovies = movies.slice(0, 6)

  return (
    <div>
      <div className="new-section">New This Week</div>
      <Grid container spacing={10} className='new-grid'>
        {someMovies.map((movie, index) => {
          const { backdrop_path, title } = movie
          return (<Grid item xs={2} key={index}>
            <img src={backdrop_path} alt={title} className='new-picture' key={title}></img>
            <div className='new-title' key={index}>{title}</div>
          </Grid>
          )
        })}
      </Grid>
    </div >

  );
}

export default NewThisWeek;
