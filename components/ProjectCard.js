import * as React from 'react';
import Image from "next/image";
import socialMedia from "../public/images/social_media.png";
import santhoshsite from "../public/images/santhosh_site.png";


export default function ProjectCard(props) {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <h1 className="text-white text-center mt-10 text-4xl">Lets Walk through <span className="text-orange-500">Our Work</span></h1>
                <div className="container px-5 pt-10 pb-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FULLSTACK</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Kanban Board</h1>
                                    <p className="leading-relaxed mb-3">This project is developed for a client as Employe Task Mangement System using REACT.JS, APIs FLASK, and MongoDB.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                                            coming soon ...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                                <Image class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                    src={socialMedia}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FULLSTACK</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">The Social Media App</h1>
                                    <p className="leading-relaxed mb-3">This project is completely designed from scratch using MERN Stack i.e MongoDB, Express.JS, React.JS, and Node.JS.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                                            <a href='https://www.social-app.ml/' target="_blank">View Site</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                <Image
                                    class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                    src={santhoshsite}
                                    alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FULLSTACK</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Portfolio</h1>
                                    <p className="leading-relaxed mb-3">This is my Portfolio build by using ReactJS and NextJS, Which made me curious to work more on MERN Stack Development.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                            <a href='http://santhosh.gq/'>View Site</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FULLSTACK</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-600 mb-3">Chat Application</h1>
                                    <p className="leading-relaxed mb-3">This Chat App is build using ReactJS, React-Router, and nodejs.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                            <a href='https://chat-app-coder.netlify.app/'>View Site</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
