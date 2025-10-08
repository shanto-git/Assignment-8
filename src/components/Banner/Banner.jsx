import React from "react";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center py-20">
          <div className=" mx-auto">
            <h1 className="text-5xl font-bold mb-4">
              We Build <br />{" "}
              <span className="bg-gradient-to-r from-indigo-500  to-purple-500 bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="text-gray-500 mb-4">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br /> Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
            <div className="mb-4">
              <button className="btn mr-4">Google Play</button>
              <button className="btn">App Store</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <img src={hero} alt="" />
      </div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-center p-10 md:p-20">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-8">
          Trusted by Millions, Built for You
        </h1>

        {/* Responsive grid layout */}
        <div className="stats flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-white">
          <div className="text-center">
            <div className="stat-title text-white text-sm md:text-base">
              Total Downloads
            </div>
            <div className="stat-value text-5xl md:text-6xl font-bold">
              29.6M
            </div>
            <div className="stat-desc text-white text-sm">
              21% more than last month
            </div>
          </div>

          <div className="text-center">
            <div className="stat-title text-white text-sm md:text-base">
              Total Reviews
            </div>
            <div className="stat-value text-5xl md:text-6xl font-bold">
              906K
            </div>
            <div className="stat-desc text-white text-sm">
              46% more than last month
            </div>
          </div>

          <div className="text-center">
            <div className="stat-title text-white text-sm md:text-base">
              Active Apps
            </div>
            <div className="stat-value text-5xl md:text-6xl font-bold">
              132+
            </div>
            <div className="stat-desc text-white text-sm">
              31 more will Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
