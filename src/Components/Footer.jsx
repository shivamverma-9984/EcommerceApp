import React from "react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400  ">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <Link to="/" className="block w-56 mb-10">
                <svg
                  version="1.1"
                  viewBox="0 0 3368 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(0 -75)">
                      <g transform="translate(0 75)">
                        <rect
                          width="512"
                          height="512"
                          rx="128"
                          fill="#3D5AFE"
                        ></rect>
                        <rect
                          x="149"
                          y="176"
                          width="220"
                          height="220"
                          fill="#fff"
                        ></rect>
                        <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                        <circle
                          cx="369"
                          cy="286"
                          r="40"
                          fill="#2962FF"
                        ></circle>
                      </g>
                      <text
                        fill="white"
                        font-family="Nunito-Bold, Nunito"
                        font-size="512"
                        font-weight="bold"
                      >
                        <tspan x="654" y="518">
                          Ecommerce
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </Link>
            </div>

            <div className="className1">
              <div className=" px-4 my-4 w-auto">
                <div className="mt-[-30%] md:mt-0">
                  <h2 className="inline-block text-xl pb-2 mb-2 border-b-4 border-blue-500">
                    Company
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <Link to="/home" className="hover:text-blue-400">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-blue-400">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="-mt-10 md:mt-0">
              <div className="px-4 my-4 w-full sm:w-auto">
                <div className="mt-[-2%] md:mt-0">
                  <h2 className="inline-block text-xl pb-2 mb-2 border-b-4 border-blue-500">
                    Consumer Policy
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      Cancellation & Returns
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      100% Purchase Protection
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      Ecommerce App Download
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      See More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="className3">
              {" "}
              <div className="px-4 my-4 w-full sm:w-auto">
                <div className="mt-[-2%] md:mt-0">
                  <h2 className="inline-block text-xl pb-2 mb-2 border-b-4 border-blue-500">
                    Help
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <Link to="#" className="hidden md:hover:text-blue-400">
                      Payments Shipping
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      Cancellation & Returns{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hidden md:hover:text-blue-400">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-400">
                      Report InFringement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="mx-4 pr-2 md:mx-0 md:pr-0">
                {" "}
                <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                  <div className="mt-[-4%] md:mt-0">
                    <h2 className="inline-block text-xl pb-2 mb-2 border-b-4 border-blue-500">
                      Connect With Us
                    </h2>
                  </div>
                  <div className="md:flex ">
                    <Link
                      to="https://github.com/shivamverma-9984"
                      className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 md:p-1 md:px-2"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/shivam-kumar-verma-529410220/"
                      className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 md:p-1 md:px-2"
                    >
                      <FaLinkedinIn />{" "}
                    </Link>
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400  md:p-1 md:px-2"
                    >
                      <FaTelegramPlane />
                    </Link>
                    <Link
                      to="#"
                      className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400 md:p-1 md:px-2"
                    >
                      <MdOutgoingMail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-500 py-4 md:py-6 text-gray-100 ">
        <div className="space-y-1 mt-[-10%] mb-[-2%] md:text-center  font-semibold text-white text-xl md:flex justify-between px-4 md:pt-[90px] ">
          <h1 className=" text-[14px] px-8 md:text-md mt-6">
            {" "}
            Copyright © 2023. All Rights Reserved.
          </h1>
          <div className="  flex justify-around md:space-x-1 ">
            <img
              className=" h-4  w-12 md:h-6 md:w-12 md:mt-4 rounded-sm"
              src="visa.png"
              alt=""
            />
            <img
              className=" h-4  w-12 md:h-6 md:w-12 md:mt-4 rounded-sm"
              src="master.png"
              alt=""
            />
            <img
              className=" h-4  w-12 md:h-6 md:w-12 md:mt-4 rounded-sm"
              src="rupay.jpg"
              alt=""
            />
            <img
              className=" h-4  w-12 md:h-6 md:w-12 md:mt-4 rounded-sm"
              src="sbi.png"
              alt=""
            />
            <img
              className=" h-4  w-12 md:h-6 md:w-12 md:mt-4 rounded-sm"
              src="silver.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
