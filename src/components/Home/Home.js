import MainPage from './components/MainPage/MainPage'
import NewThisWeek from './components/NewThisWeek/NewThisWeek'
import Categories from './components/Categories/Categories'

function Home() {
    return (
        <div>
            <MainPage />
            <NewThisWeek />
            <Categories />
        </div>
    );
}

export default Home;
