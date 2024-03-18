
import Banner from '../../component/Banner/Banner';
import Phones from '../../component/Phones/Phones';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones =useLoaderData()
    // console.log(phones)
    return (
        <div>
           <Banner></Banner>
           <Phones phones={phones} ></Phones>
        </div>
    );
};

export default Home;