import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-28 h-28 rounded-full border-t border-l border-white animate-spin" />
    </div>
  );
};

export default Loader;
