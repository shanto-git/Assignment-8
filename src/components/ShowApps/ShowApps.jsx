import React, { useState } from "react";
import { useNavigate } from "react-router";

const ShowApps = ({ allApps }) => {
    const back =useNavigate();

    const handleGoBack = () => {
    if (window.history.length > 0) {
      back(-0); 
    } else {
      back("/"); 
    }
  };
  const [searchItem, setSearchItem] = useState("");
  const showApp = allApps.filter((app) =>
    app.title.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div>
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h3 className="font-semibold text-2xl">
            ({showApp.length}) Apps Found
          </h3>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              value={searchItem}
              onChange={(search) => setSearchItem(search.target.value)}
            />
          </label>
        </div>
        {showApp.length > 0 ? (
          <div className="grid grid-cols-12 gap-10 ">
            {showApp.map((app) => (
              <div
                key={app.id}
                className="card place-items-center bg-base-100 w-auto shadow-sm rounded-xl col-span-12 sm:col-span-6 lg:col-span-3 hover:scale-105"
              >
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
                    <div className="badge badge-outline ">{app.downloads}</div>
                    <div className="badge badge-outline">{app.ratingAvg}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="">
            <div className="flex justify-center items-center my-10">
              <img
                src="/App-Error.png"
                alt="No apps found"
                className="w-64 h-64 opacity-70"
              />
            </div>
            <h1 className="text-5xl font-bold mb-5">OPPS!! APP NOT FOUND</h1>
            <p className="text-2xl text-gray-500 mb-6">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <button className="btn bg-linear-to-l from-purple-500 to-indigo-700 text-white" onClick={handleGoBack}>Go Back!</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowApps;
