import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { db } from "../utils/firebase";
import { collection, addDoc, query } from "firebase/firestore";
import { useRouter } from "next/router";
import Head from "next/head";



const contact = () => {

    const [fname, setFname] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const router = useRouter();
    const databaseRef = collection(db, 'users');
    const addData = () => {
        addDoc(databaseRef, {
            fname: fname,
            subject: subject,
            email: email,
            number: number
        })
            .then(() => {
                router.push('/thankyou');

                setFname('');
                setSubject('');
                setEmail('');
                setNumber(null);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div>
            <Head>
                <title>Contact me! | Fulltime Support</title>
                <meta name="description" content="A freelancer with React, Next.js, Node.js, and Django Skills - Looking to explore the technologies with your ideas." />
                <link rel="icon" href='https://www.svgrepo.com/show/225051/cpu.svg' />
            </Head>
            <div className=" text-white text-center items-center my-10">
                <div className="px-10">
                    <h1 className="text-5xl my-5 ">Contact Us!</h1>
                    <p className='text-2xl'>Find Support and Service from <span className='text-orange-600'>SANTHOSH</span> NAIK.</p>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto  bg-slate-900  hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                            <div className="py-24 pl-14">
                                <h2 className="sm:text-left text-orange-300 text-bold text-3xl pb-7 pr-17">Query Us any time?</h2>
                                <p className="text-white"> Email: <a className="text-blue-700">santhosh.m0719@gmail.com</a></p>
                                <p className="text-white">Mobile: (+91)7093946332</p>
                                <p className="text-white">Address: Hyderabad, INDIA</p>
                                <div>
                                    <h2 className="text-bold text-2xl text-orange-300 pt-5 pb-5 pr-17">Social Media Networks!</h2>
                                    <div className="flex gap-6 pb-5">
                                        <a target="_blank" href="https://www.instagram.com/santhosh_dev07/"> <FaInstagram className="text-2xl cursor-pointer text-gray-500 hover:text-yellow-600" /></a>
                                        <a target="_blank" href="https://www.facebook.com/Santhoshdev07/"> <FaFacebook className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" /></a>
                                        <a target="_blank" href="https://www.linkedin.com/in/santhosh-dev07/"><FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-violet-600" /></a>
                                        <a target="_blank" href="https://github.com/santhosh-dev07" ><FaGithub className="text-2xl cursor-pointer text-gray-500 hover:text-red-600" /></a>
                                    </div>
                                </div>
                                <span className="text-orange-500 underline">** Let's Connect Now and Make your Vision Possible **</span>
                            </div>
                        </div>
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Lets Meet for Coffe!</h3>
                            {/* form starts here */}
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" >
                                            Full Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="Full Name"
                                            value={fname}
                                            onChange={(e) => { setFname(e.target.value) }}
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Query
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="subject"
                                            type="text"
                                            placeholder="Your Query"
                                            value={subject}
                                            onChange={(e) => { setSubject(e.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Moblie Number
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="number"
                                        placeholder="Moble Number"
                                        value={number}
                                        onChange={(e) => { setNumber(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={addData}
                                    >
                                        Submit here
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact;
