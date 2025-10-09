import React from "react";
import { useLoaderData } from "react-router";
import ShowApps from "../../components/ShowApps/ShowApps";

const AppsData = () => {
  const allApps = useLoaderData();
  return (
    <div className="bg-base-200 p-20">
      <div className="text-center">
        <h1 className="text-5xl mb-5 font-bold">Our All Applications</h1>
        <p className="text-xl text-gray-500 mb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <ShowApps allApps={allApps}></ShowApps>
      </div>
    </div>
  );
};

export default AppsData;
