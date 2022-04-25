import React from "react";

function vision() {
  return (
    <div className="flex-col text-white justify-center items-center my-10">
      <p className="text-violet-500 uppercase text-center">Vision</p>
      <h2 className="text-5xl text-center">
        <span className="text-orange-500">Our</span> Vision
      </h2>
      <div className="min-w-7xl mx-0 md:mx-20">
        <div className=" flex md:flex-row flex-col justify-between items-center">
          <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-10">
            <div className="border-l-2 mt-10">
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div className="flex-auto">
                  <h1 className="text-xl font-bold">Build fastest and efficient web apps using new technologies.</h1>
                </div>
              </div>

              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-xl font-bold">Get <span className="text-orange-500 text-2xl">FREE</span> Social Media Marketing and Google Analytics Integration.</h1>
                </div>
              </div>

              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-xl font-bold">Earn through your own website.</h1>
                </div>
              </div>

              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-xl font-bold">Design {'=>'} Develop {'=>'} Deploy with full time <span className="text-orange-400">Support</span>.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default vision;
