import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-light-khaki text-darkslateblue">
      <div className="flex justify-between items-center container mx-auto p-4">
        <div className="text-lg">Welcome to SVGizzle, my nizzle!</div>
        <div>
          <button className="bg-limegreen hover:bg-limegreen text-white font-bold py-2 px-4 mr-4 rounded">
            Login
          </button>
          <button className="bg-hotpink hover:bg-hotpink text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
