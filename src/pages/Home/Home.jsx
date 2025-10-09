import Banner from '../../components/Banner/Banner';
import HomeApps from '../../components/HomeApps/HomeApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps =useLoaderData()



    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <div className="text-center m-20">
                <h1 className="text-4xl font-bold mb-5 ">Trending Apps</h1>
      <p className="text-gray-600 text-xl mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
                <HomeApps key={apps.id} apps={apps}></HomeApps>
            </div>
        </div>
    );
};

export default Home;