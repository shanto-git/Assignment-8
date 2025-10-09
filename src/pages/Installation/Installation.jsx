import React from "react";

const Installation = () => {
  return (
    <div>
      <div className="bg-base-200 px-20 pb-10">
        <div className="py-20 text-center">
          <h className="text-5xl font-bold">Your Installed Apps</h>
          <p className="text-gray-500 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold">1 Apps Found</h3>
          <label className="select w-36 h-10">
            <select>
              <option>Sort By Size</option>
              <option>Sort By Rating</option>
            </select>
          </label>
        </div>
        <div className="p-5 bg-white rounded-xl flex justify-between">
            <div className="">
                <img src="" alt="" />
                <div className="">
                    <h2>Forest: Focus for Productivity</h2>
                    <div className="flex justify-start gap-10">
                        <span>9</span>
                        <span>4</span>
                        <span>size</span>
                    </div>
                </div>
            </div>
            <button className="btn">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default Installation;
