import GenreMovieList from './components/GenreMovieList';
import Header from './components/Header'
import ProductionHouse from './components/ProductionHouse';
import Slider from './components/Slider';

function App() {
    return (
        <>
            <Header />
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28">
                <Slider />
                <ProductionHouse />
                <GenreMovieList />
            </div>
        </>
    );
}

export default App