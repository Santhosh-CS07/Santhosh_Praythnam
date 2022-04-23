import Head from "next/head";
import React from "react";
import {
  MdWeb,
  MdOutlineDesignServices,
  MdChatBubbleOutline,
} from "react-icons/md";
import { SiAmazonaws, SiWordpress, SiGoogleanalytics, SiFirebase, SiJavascript } from "react-icons/si";


function services() {
  return (
    <div>
      <Head>
        <title>Our Best Services</title>
      </Head>
      <div className="flex-col justify-center items-center my-10">
        <p className="text-violet-500 uppercase text-center">Services</p>
        <h2 className="text-5xl text-center">
          <span className="text-white"> Our <span className="text-orange-500">Services</span></span>
        </h2>
        <div className="flex justify-center text-white items-center">
          <div className="grid grid-cols-2 md:mx-0 mx-10 md:grid-cols-3 gap-5 my-20">
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <MdWeb className="text-4xl text-orange-600 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                Web Development
              </h1>
            </div>
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <MdOutlineDesignServices className="text-4xl text-orange-600 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                UI/UX Design
              </h1>
            </div>
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <MdChatBubbleOutline className="text-4xl text-blue-400 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                Degital Marketing
              </h1>
            </div>
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <SiGoogleanalytics className="text-4xl text-yellow-400 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                Google Analytics
              </h1>
            </div>
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <SiAmazonaws className="text-4xl text-orange-600 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                Amazon Web Services
              </h1>
            </div>
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <SiFirebase className="text-4xl text-yellow-500 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                Firebase
              </h1>

            </div>
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <SiWordpress className="text-4xl text-blue-600 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                WordPress
              </h1>
            </div>
            <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-violet-500 hover:shadow-lg  border-violet-100 rounded-md p-8 hover:border-violet-500">
              <SiJavascript className="text-4xl text-yellow-200 group-hover:text-white" />
              <h1 className="text-xl text-white-800 font-semibold group-hover:text-white my-2">
                Javascript
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
