
import Header from '../../Header/Header';
import Categories from '../../components/Categories/Categories';

const Home = () => {

    return (
        <div >
            <Header></Header>
            <div className='max-w-6xl mx-auto my-20'>
                <Categories></Categories>
            </div>

        </div>
    );
};

export default Home;