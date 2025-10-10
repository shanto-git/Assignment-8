import React from "react";
import { useLoaderData } from "react-router";
import icon1 from "../../assets/icon-downloads.png";
import icon2 from "../../assets/icon-ratings.png";
import icon3 from "../../assets/icon-review.png";
import AppRecharts from "../Recharts/AppRecharts";
import { addToStoredDB, getStoredApp } from "../../utility/addToDB";
import { useState } from "react";
import { useEffect } from "react";

const SingleApp = () => {
  const appDetails = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    const storedApps = getStoredApp();
    if (storedApps.includes(appDetails.id)) {
      setIsInstalled(true);
    }
  }, [appDetails.id]);

  const handleInstallation = (appDetails) => {
    addToStoredDB(appDetails.id);

    setIsInstalled(true);
  };
  return (
    <div>
      <div className="p-20 bg-base-200 min-h-screen ">
        <div className="grid grid-cols-12 lg:flex-row gap-10">
          <img
            src={appDetails.image}
            className="w-80 h-80 max-w-sm rounded-lg shadow-2xl col-span-3"
          />
          <div className="grid col-span-9">
            <div className="">
              <h1 className="text-5xl font-bold">{appDetails.title}</h1>
              <p className="pt-3">
                Developed by{" "}
                <span className="text-blue-700 font-semibold">
                  {appDetails.companyName}
                </span>
              </p>
              <div className="divider divider-start py-7"></div>
            </div>

            <div className="flex justify-start items-center gap-20">
              <div className="">
                <img src={icon1} alt="" />
                <p className="text-gray-600 text-sm mb-4">Downloads</p>
                <h1 className="text-4xl font-bold mb-4">
                  {appDetails.downloads}
                </h1>
              </div>
              <div className="">
                <img src={icon2} alt="" />
                <p className="text-gray-600 text-sm mb-4">Average Ratings</p>
                <h1 className="text-4xl font-bold mb-4">
                  {appDetails.ratingAvg}
                </h1>
              </div>
              <div className="">
                <img src={icon3} alt="" />
                <p className="text-gray-600 text-sm mb-4">Total Reviews</p>
                <h1 className="text-4xl font-bold mb-4">
                  {appDetails.reviews}
                </h1>
              </div>
            </div>
            <button
              onClick={() => handleInstallation(appDetails)}
              // disabled={isInstalled}
              className="btn btn-success text-white font-bold w-52 h-10"
            >
              {isInstalled
                ? "Installed"
                : `Install Now (${appDetails.size} MB)`}
            </button>
          </div>
        </div>
        <div className="divider divider-start py-7"></div>
        <h1 className="font-semibold text-xl">Ratings</h1>
        <AppRecharts ratings={appDetails.ratings}></AppRecharts>
        <div className="divider divider-start py-7"></div>
        <h1 className="font-bold text-xl mb-5">Description</h1>
        <p className="text-sm text-gray-600">{appDetails.description}</p>
      </div>
    </div>
  );
};

export default SingleApp;
