import React, { useMemo, useCallback } from 'react'
import MainPage from './components/MainPage/MainPage'
import NewThisWeek from './components/NewThisWeek/NewThisWeek'
import Categories from './components/Categories/Categories'
import MiniDrawer from './components/MiniDrawer/MiniDrawer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Home.css'
import db from '../../data/db.json'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Home = () => {
    const { movies, genres } = db

    const getRandomInt = useCallback((max) => {
        return Math.floor(Math.random() * max);
    }, [])

    const movie = useMemo(() => {
        return movies[getRandomInt(movies.length - 1)]
    }, [movies, getRandomInt])

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className='home' >
                <MiniDrawer />
                <MainPage movie={movie} />
                <NewThisWeek movies={movies} />
                <Categories movies={movies} genres={genres} />
            </div>
        </ThemeProvider>
    );
}

export default Home;
