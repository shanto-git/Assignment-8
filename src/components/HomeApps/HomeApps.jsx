import React from "react";
import { Link, NavLink } from "react-router";
import { Download, Star } from 'lucide-react';

const HomeApps = ({ apps }) => {
  const appsData = apps.slice(0, 8);
  return (    
      <div className="">
        <div className="">
          <div className="grid grid-cols-12 gap-10">
            {appsData.map((app) => (
              <Link key={app.id} to={`/SingleApp/${app.id}`} className="card place-items-center bg-base-100 w-auto shadow-sm rounded-xl col-span-12 sm:col-span-6 lg:col-span-3 hover:scale-105 transition-transform">
                              <img
                                className="m-2 rounded-xl w-auto lg:w-70 h-70"
                                src={app.image}
                                alt="Shoes"
                              />
                              <div className="card-body">
                                <h2 className="card-title">
                                  {app.title} : {app.companyName}
                                </h2>
                                <div className="flex justify-between mt-auto">
                                  <div className="badge bg-green-100 "><h1 className="flex items-center gap-1 text-green-500 font-semibold"><Download size={14} strokeWidth={2.75} />{app.downloads}</h1></div>
                                  <div className="badge bg-orange-100"><h1 className="flex items-center gap-1 text-orange-500 font-semibold"><Star size={13} strokeWidth={3} /> {app.ratingAvg}</h1></div>
                                </div>
                              </div>
                            </Link>
            ))}
          </div>
        </div>
        <div className="mt-10">
              <Link to='/AppsData'>
            <button className="btn px-6 bg-gradient-to-r from-indigo-500  to-purple-500 text-white font-semibold">
              Show All
            </button>
              </Link> 
        </div>
      </div>
  );
};

export default HomeApps;
