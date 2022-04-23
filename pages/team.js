import React from 'react';
import Image from "next/image";
import Head from "next/head";
import HeroImage from "../public/images/test3.jpg";
import HeroImage1 from "../public/images/ravinder.JPG";
import HeroImage2 from "../public/images/saurabh.jpg";
import HeroImage3 from "../public/images/gana.jpg";
import HeroImage4 from "../public/images/rakesh.jpeg";




const team = () => {
    return (
        <div>
            <Head>
                <title>INFuture Leaders</title>
            </Head>
            <div className="flex-col text-white justify-center items-center my-10">
                <div className="min-w-7xl mx-0 md:mx-20">
                    <div className=" flex md:flex-row flex-col justify-between items-center my-10">
                        <div className="px-10">
                            <h1 className="text-5xl my-5 ">Leadership</h1>
                            <p className='text-2xl'>Find photos and biographies of <span className='text-orange-600'>INFuture</span> India Leadership Team.</p>
                        </div>
                        <div className="flex-col px-10 border ">
                            <div className="text-1xl text-white-400 mt-5 mb-10 box-border-2">
                                <p className='text-2xl my-3'>Press Contact</p>
                                <p>INFuture India Media Relations</p>
                                <p className='text-blue-400'><a href='#'>infuturetechs@gmail.com</a></p>
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
                            <h3 className='my-1 text-3xl '><span className='text-orange-400 '>Founder</span> & Managing Director [MD] </h3>
                            <span className='text-orange-400 text-bold my-4'>MUDAVATH RAVINDER</span>
                            <p>My skills and capabilities include but not limited to custom Web Development, Design and Web Animations, Flutter app development. Besides these, I have knowledge in Search Engine Optimization (SEO) and Content Management Systems like WordPress.</p>
                            <p><span className='text-gray-400'>Education</span>: Bachelers from IIT, Madras</p>
                            <p><span className='text-gray-400'>Skils</span>: Leadership, Marketing, NODE, MONGODB, and FLASK</p>
                            <p><span className='text-gray-400'>Email</span>: <a className='text-blue-400' href='http://www.santhosh.gq/'>rameshravinder3@gmail.com</a></p>
                            <p><span className='text-gray-400'>Website</span>: <a className='text-blue-400' href='http://www.santhosh.gq/'>www.ravinder.ml</a></p>
                        </div>
                    </div>
                </div>
                <div className="min-w-7xl mx-0 md:mx-20">
                    <section className="pt-20 pb-20">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold  text-blueGray-700">Here are our heroes</h2>
                                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                    We are team with love towords the <span className="text-orange-600">INFuture</span> Technologies.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                                <div className="px-6">
                                    <Image
                                        className='rounded-full'
                                        src={HeroImage}
                                        width={600} height={600}
                                        objectFit="cover"
                                        alt='Ganesh - Programmer'
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold text-blueGray-700">Santhosh Naik</h5>
                                        <p className="mt-1 text-sm text-violet-400 uppercase font-semibold"> Web Developer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                                <div className="px-6">
                                    <Image
                                        className='rounded-full'
                                        src={HeroImage4}
                                        width={600} height={600}
                                        objectFit="cover"
                                        alt='Rakesh- Designer'
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold text-blueGray-700">M. Rakesh</h5>
                                        <p className="mt-1 text-sm text-violet-400 uppercase font-semibold">
                                            MUI/UX Designer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                                <div className="px-6">
                                    <Image
                                        className='rounded-full'
                                        src={HeroImage3}
                                        width={600} height={600}
                                        objectFit="cover"
                                        alt='Thirupathi - Marketing '
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold text-blueGray-700">Ganesh Naik</h5>
                                        <p className="mt-1 text-sm text-violet-400 uppercase font-semibold">
                                            Marketing Specialist
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
                                <div className="px-6">
                                    <Image
                                        className='rounded-full'
                                        src={HeroImage2}
                                        width={600} height={600}
                                        objectFit="cover"
                                        alt='Laxman - Developer'
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold text-blueGray-700">Laxman</h5>
                                        <p className="mt-1 text-sm text-violet-400 uppercase font-semibold">Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default team;