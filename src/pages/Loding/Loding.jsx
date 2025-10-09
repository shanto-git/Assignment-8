import React from "react";

const Loding = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <h1 className="text-5xl flex justify-center items-center gap-2 font-bold">L <div className="w-16 h-16 rounded-full animate-spin"><img src="/logo.png" alt="loading" /></div> ading...</h1>
      </div>
    </div>
  );
};

export default Loding;
