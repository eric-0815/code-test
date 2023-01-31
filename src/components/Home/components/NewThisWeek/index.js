import React, { useMemo } from 'react'
import Grid from '@mui/material/Grid';
import HoverPreview from './components/HoverPreview';
import './index.css'

const NewThisWeek = ({ movies, isSmall }) => {
  const someMovies = useMemo(() => {
    return movies.slice(0, 6)
  }, [movies])

  return (
    <div>
      <div className="new-this-week-section">New This Week</div>
      <Grid container spacing={12} className='new-this-week-grid'>
        {someMovies.map((movie, index) => {
          const { backdrop_path, title, overview, vote_average } = movie
          return (
            <Grid item xs={2} key={index}>
              <HoverPreview
                image={backdrop_path}
                title={title}
                overview={overview}
                vote_average={vote_average}
                isSmall={isSmall} />
            </Grid>
          )
        })}
      </Grid>
    </div >
  );
}

export default NewThisWeek;
