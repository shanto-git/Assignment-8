import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeStoredDB } from "../../utility/addToDB";
import { useState } from "react";
import { Download, Star } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const data = useLoaderData();
  const [installed, setInstalled] = useState([]);
  const [sortItem, setSortItem] = useState("");

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertStoredApp = storedAppData.map((id) => parseInt(id));
    const installedApp = data.filter((app) =>
      convertStoredApp.includes(app.id)
    );
    setInstalled(installedApp);
  }, [data]);

  const handleSortItem = (type) => {
    setSortItem(type);
    let sorted = [...installed];

    if (type === "Size") sorted.sort((a, b) => a.size - b.size);
    if (type === "Rating") sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
    if (type === "Download") sorted.sort((a, b) => b.downloads - a.downloads);

    setInstalled(sorted);
  };

  const handleRemove = (id) => {
    const appToRemove = installed.find((app) => app.id === id);
    removeStoredDB(id);
    setInstalled(installed.filter((app) => app.id !== id));
    toast.success(`${appToRemove.title} uninstalled successfully!`);
  };
  return (
    <div>
      <div className="bg-base-200 px-20 pb-10">
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold">Your Installed Apps</h1>
          <p className="text-gray-500 text-xl py-5">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold">{installed.length} Apps Found</h3>
          <label className="select w-auto h-10">
            <select
              value={sortItem}
              onChange={(e) => handleSortItem(e.target.value)}
              className="select select-bordered"
            >
              <option value="Size">Sorted by Size</option>
              <option value="Rating">Sorted by Rating</option>
              <option value="Download">Sorted by Download</option>
            </select>
          </label>
        </div>
        {installed.map((app) => (
          <div className="p-3 bg-white rounded-xl flex justify-between items-center mb-5">
            <div className="flex gap-5 items-center">
              <img className="w-15 h-15 rounded-sm" src={app.image} alt="" />
              <div className="">
                <h2 className="text-xl font-bold">{app.title}</h2>
                <div className="flex justify-start gap-8">
                  <span className="text-green-700 text-sm flex items-center gap-1">
                    <Download size={12} strokeWidth={2.75} /> {app.downloads}
                  </span>
                  <span className="text-orange-400 text-sm flex items-center gap-1">
                    <Star size={13} strokeWidth={3} />
                    {app.ratingAvg}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    {app.size} MB
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleRemove(app.id)}
              className="btn bg-green-400 text-white font-semibold shadow-sm"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Installation;
