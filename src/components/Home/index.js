import React, { useState, useMemo, useCallback, createContext } from 'react'
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

const MenuContext = createContext();

const MenuProvider = (props) => {
    const [openMenu, setOpenMenu] = useState(false)
    const value = [openMenu, setOpenMenu]
    return <MenuContext.Provider value={value} {...props} />
}

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
                <MenuProvider>
                    <MiniDrawer MenuContext={MenuContext} />
                    <MainPage movie={movie} MenuContext={MenuContext} />
                    <NewThisWeek movies={movies} />
                    <Categories movies={movies} genres={genres} />
                    <MobileDrawer />
                </MenuProvider>
            </div>
        </ThemeProvider>
    );
}

export default Home;
