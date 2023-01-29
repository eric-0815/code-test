import React from 'react'
import useMedia from 'use-media';
import Grid from '@mui/material/Grid';
import HoverPreview from './components/HoverPreview/HoverPreview';
import './index.css'

const NewThisWeek = (props) => {
  const { movies } = props
  const someMovies = movies.slice(0, 6)

  const isSmall = useMedia('(max-width: 1300px)')
  // const isNormal = useMedia('(min-width: 1300px)')
  const md = isSmall ? 4 : 2;

  return (
    <div>
      <div className="new-this-week-section">New This Week</div>
      <Grid container spacing={2} className='new-this-week-grid'>
        {someMovies.map((movie, index) => {
          const { backdrop_path, title, overview, vote_average } = movie
          return (
            <Grid item xs={2} md={md} key={index}>
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
