import './NewThisWeek.css'
import Grid from '@mui/material/Grid';
import HoverPreview from './components/HoverPreview/HoverPreview';

function NewThisWeek(props) {
  const { movies } = props
  const someMovies = movies.slice(0, 6)

  return (
    <div>
      <div className="new-section">New This Week</div>
      <Grid container spacing={10} className='new-grid'>
        {someMovies.map((movie, index) => {
          const { backdrop_path, title, overview, vote_average } = movie
          return (
            <Grid item xs={2} key={index}>
              <HoverPreview
                image={backdrop_path}
                title={title}
                overview={overview}
                vote_average={vote_average} />
            </Grid>
          )
        })}
      </Grid>
    </div >

  );
}

export default NewThisWeek;
