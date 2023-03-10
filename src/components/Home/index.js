import React, { useState, useMemo, useCallback } from 'react'
import useMedia from 'use-media';
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

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const isBig = useMedia({ minWidth: '1300px' });
    const isSmall = useMedia({ maxWidth: '1300px' });

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
                <MiniDrawer
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isMobile={isMobile}
                    setIsMobile={setIsMobile}
                    isBig={isBig}
                    isSmall={isSmall} />
                <MainPage
                    movie={movie}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isMobile={isMobile}
                    setIsMobile={setIsMobile}
                    isBig={isBig}
                    isSmall={isSmall}
                />
                <NewThisWeek movies={movies} isSmall={isSmall} />
                <Categories movies={movies} genres={genres} />
                <MobileDrawer />
            </div>
        </ThemeProvider>
    );
}

export default Home;
