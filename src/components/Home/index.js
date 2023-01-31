import React, { useState, useMemo, useCallback } from 'react'
import MainPage from './components/MainPage'
import NewThisWeek from './components/NewThisWeek'
import Categories from './components/Categories'
import MiniDrawer from './components/MiniDrawer'
import MobileDrawer from './components/MobileDrawer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import db from '../../data/db.json'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// const MobileContext = createContext()

// const MobileProvider = (props) => {
//     const [isMobile, setIsMobile] = useState(false)
//     const value = [isMobile, setIsMobile]
//     return <MobileContext.Provider value={value} {...props} />
// }

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
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
            <div>
                <MiniDrawer />
                <MainPage movie={movie} />
                <NewThisWeek movies={movies} />
                <Categories movies={movies} genres={genres} />
                <MobileDrawer />
            </div>
        </ThemeProvider>
    );
}

export default Home;
