import React from "react";
import { Link, NavLink } from "react-router";

const HomeApps = ({ apps }) => {
  const appsData = apps.slice(0, 8);
  return (
    <div className="text-center m-20">
      <h1 className="text-4xl font-bold mb-5 ">Trending Apps</h1>
      <p className="text-gray-600 text-xl mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="">
        <div className="">
          <div className="grid grid-cols-12 gap-10">
            {appsData.map((app) => (
              <div key={app.id} className="card bg-base-100 w-auto shadow-sm rounded-xl col-span-6 sm:col-span-6 lg:col-span-3 hover:scale-105">
                <img className="m-2 rounded-xl" src={app.image} alt="Shoes" />
                <div className="card-body">
                  <h2 className="card-title">
                    {app.title} : {app.companyName}
                  </h2>
                  <div className="flex justify-between mt-auto">
                    <div className="badge badge-outline">{app.downloads}</div>
                    <div className="badge badge-outline">{app.ratingAvg}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
            <button className="btn px-6 bg-gradient-to-r from-indigo-500  to-purple-500 text-white font-semibold">
              <Link to='/AppsData'>Show All</Link> 
            </button>
        </div>
      </div>
      
    </div>
  );
};

export default HomeApps;
