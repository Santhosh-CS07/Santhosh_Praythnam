import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiFlask,
  SiMongodb,
  SiGithub
} from "react-icons/si";
import Head from "next/head";



function technologies() {
  return (
    <div>
      <Head>
        <title>A Computer Software Company</title>
      </Head>
      <div className="flex-col text-white  justify-center items-center my-20">
        <p className="text-violet-500 uppercase text-center">Technologies</p>
        <h2 className="text-5xl   text-center">
          Tools we <span className="font-bold text-orange-500">USE</span>
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-7 grid-cols-3 mt-10 gap-8">
            <div>
              <span className="text-6xl text-blue-500 cursor-pointer"><SiReact /></span>
              <h2 className="my-5 text-gray-400">React.js</h2>
            </div>
            <div>
              <span className="text-6xl text-black-500 cursor-pointer"><SiNextdotjs /></span>
              <h2 className="my-5 text-gray-400">Next.js</h2>
            </div>
            <div>
              <span className="text-6xl text-blue-500 cursor-pointer"><SiTailwindcss /></span>
              <h2 className="my-5 text-gray-400">Tailwind CSS</h2>
            </div>
            <div>
              <span className="text-6xl text-green-300 cursor-pointer"><SiChakraui /></span>
              <h2 className="my-5 text-gray-400">Chakra UI</h2>
            </div>
            <div>
              <span className="text-6xl text-black-500 cursor-pointer"><SiFlask /></span>
              <h2 className="my-5 text-gray-400 ">Flask</h2>
            </div>
            <div>
              <span className="text-6xl text-green-500 cursor-pointer"><SiMongodb /></span>
              <h2 className="my-5 text-gray-400 ">MongoDB</h2>
            </div>
            <div>
              <span className="text-6xl text-black-500 cursor-pointer"><SiGithub /></span>
              <h2 className="my-5 text-gray-400">Github</h2>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

export default technologies;
