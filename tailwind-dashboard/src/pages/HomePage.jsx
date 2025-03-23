import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <section className="w-full max-w-7xl p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center  mb-6">Our Services</h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-6">
          {/* First Box (Takes full 4 columns) */}
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 1
          </div>

          {/* Second Box (Takes 3 columns) */}
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 2
          </div>

          {/* Third Box (Takes 2 columns) */}
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 3
          </div>

          {/* Fourth Box (Takes 1 column) */}
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 4
          </div>

          {/* More Boxes */}
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 5
          </div>
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 6
          </div>
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 7
          </div>
          <div className="h-[150px] border-2 border-white rounded-[12px] shadow-lg flex justify-center items-center text-xl font-semibold col-span-2">
            Service 8
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
