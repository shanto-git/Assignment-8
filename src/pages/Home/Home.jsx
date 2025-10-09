import Banner from '../../components/Banner/Banner';
import HomeApps from '../../components/HomeApps/HomeApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps =useLoaderData()


    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <HomeApps key={apps.id} apps={apps}></HomeApps>
        </div>
    );
};

export default Home;