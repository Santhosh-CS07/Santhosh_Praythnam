import React from 'react';
import Image from "next/image";
import Head from "next/head";
import HeroImage1 from "../public/images/test3.jpg";
import Pic1 from "../public/images/pic4.jpg";
import Pic2 from "../public/images/pic2.jpg";
import Pic3 from "../public/images/pic3.jpg";
import Pic4 from "../public/images/lucky.jpeg";

const team = () => {
    return (
        <div>
            <Head>
                <title>Know me better | I am a fighter</title>
                <meta name="description" content="A freelancer with React, Next.js, Node.js, and Django Skills - Looking to explore the technologies with your ideas." />
                <link rel="icon" href='https://www.svgrepo.com/show/225051/cpu.svg' />
            </Head>
            <div className="flex-col text-white justify-center items-center">
                <div className="min-w-7xl mx-0 md:mx-20">
                    <div className=" flex md:flex-row flex-col justify-between items-center my-10">
                        <div className="px-10">
                            <h1 className="text-5xl my-5 ">Leadership</h1>
                            <p className='text-2xl'>Find photos and biography of <span className='text-orange-600'>SANTHOSH</span> NAIK.</p>
                        </div>
                        <div className="flex-col px-10 border ">
                            <div className="text-1xl text-white-400 mt-5 mb-10 box-border-2">
                                <p className='text-2xl my-3'>Press Contact</p>
                                <p>A Software Media Relations</p>
                                <p className='text-blue-400'><a href='#'>santhosh.m0719@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <hr className='mx-12' />
                </div>
                <div className="min-w-7xl mx-0 md:mx-20">
                    <div className=" flex md:flex-row flex-col justify-between items-center mt-10">
                        <div className="px-20 ">
                            <Image
                                className='rounded-full'
                                src={HeroImage1}
                                width={600} height={600}
                                objectFit="cover"
                                alt='Ravinder - Founder'
                            />
                        </div>
                        <div className="flex-col px-10">
                            <h3 className='my-1 text-3xl '><span className='text-orange-400 '>Software Engineer</span> & FullStack Developer </h3>
                            <span className='text-orange-400 text-bold my-4'>M. Santhosh Naik</span>
                            <p>I am a FullStack Developer from passion and looking forword to Support small and large business to get benifited using Today's technologies. I am here today to struggle and learn as much as possible to build my DREAM. I love to CODE and also Love to think like a SUNDAR PICHAI.</p>
                            <p><span className='text-gray-400'>Education</span>: Bacheler's from <span className='text-orange-500'>GFTT</span>- Gurukula Kangri Vishwavidyalya, Uttarakhand</p>
                            <p><span className='text-gray-400'>Skils</span>: Leadership, React.js, Node,js, Flask, MongoDB, Firebase, and Marketing.</p>
                            <p><span className='text-gray-400'>Email</span>: <a className='text-blue-400'>santhosh.m0719@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-12 flex justify-center items-center">

                <card className="grid grid-cols-6 max-w-5xl mx-8 rounded-xl bg-blue-800">

                    <div className="col-span-4">

                        <h2 className="font-bold text-3xl text-white ml-10 mt-8">
                            small dream is a big crime!
                        </h2>

                        <p className="font-light text-white text-sm ml-10 mt-5">
                            This is what I belived and Now I am here today to contribute my knowledge to this universe.
                        </p>

                        <button className="text-white font-semibold ml-10 mt-5 mb-8 group ">
                            <a href='https://www.linkedin.com/in/santhosh-dev07/'>Lindin Profile</a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                    </div>

                    <div className="col-span-2 relative">
                        <img src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg" class="absolute bottom-0 right-0" />
                    </div>

                </card>

            </div>
            <div class="h-screen w-screen flex justify-center items-center bg-slate-900 ">
                <div class="bg-slate-800 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
                    <div class="flex space-x-4 items-center ">
                        <div class="w-12 h-12">
                            <img
                                alt="avatar"
                                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                class="rounded-full w-full h-full object-cover " />
                            <div>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex space-x-2 items-center">
                                <h2 class="text-base"> Santhosh </h2>
                                <svg class="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div class="  text-xs text-slate-400">posted an update</div>
                            </div>
                            <p class=" text-xs text-slate-400">2 Days Ago</p>
                        </div>

                    </div>
                    <div>
                        <p class="text-sm leading-6 text-slate-300">
                            My photos which I loved most and I also have habit of photography just to explore the nature as much as I can. Beauty exists in NATURE.
                        </p>
                    </div>
                    <div class="grid grid-cols-6 col-span-2   gap-2  ">
                        <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                            <Image class="h-full w-full object-cover "
                                src={Pic1}
                                alt="" />
                        </div>
                        <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                            <Image class="h-full w-full object-cover  "
                                src={Pic3}
                                alt="" />
                        </div>
                        <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                            <Image class="h-full w-full object-cover "
                                src={Pic2}
                                alt="" />
                        </div>
                        <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                            <Image class="h-full w-full object-cover "
                                src={Pic4}
                                alt="" />
                        </div>
                        <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                            <Image class="h-full w-full object-cover "
                                src={HeroImage1}
                                alt="" />
                        </div>
                    </div>
                    <div class="flex justify-between pt-5">
                        <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                        <div class="text-slate-400 text-sm"><p>23 Comments</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default team;