import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              <span className="text-orange-500">SANTHOSH</span><span className="text-indigo-600"> NAIK</span>
            </p>
            <div className="flex gap-6 pb-5">
              <a target="_blank" href="https://www.instagram.com/santhosh_dev07/">
                <FaInstagram className="text-2xl cursor-pointer text-gray-500 hover:text-yellow-600" />
              </a>
              <a target="_blank" href="hhttps://www.facebook.com/Santhoshdev07/">
                <FaFacebook className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/santhosh-dev07/">
                <FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" />
              </a >
              <a target="_blank" href="https://github.com/santhosh-dev07">
                <FaGithub className="text-2xl cursor-pointer text-gray-500 hover:text-red-600" />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Web Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Desktop Apps
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Js Libraries <span className="text-violet-600">New</span>
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Mobile Apps
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Links</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              <a href='/ourService'>
                Services
              </a>
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              <a href='/developer'>
                About
              </a>
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Blog
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              <a href='/vision'>
                Vision
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              <a href='/contact'>
                Contact
              </a>
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              FAQs
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-violet-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className="text-sm text-gray-800 font-semibold">
          © 2022 All rights reserved | Build with ❤ by{" "}
          <span className="text-orange-700 hover:text-violet-600 font-semibold cursor-pointer">
            Santhosh{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
