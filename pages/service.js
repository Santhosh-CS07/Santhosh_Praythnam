import Head from 'next/head';
import React from 'react';

const services = () => {
  return (
    <div>
      <Head>
        <title>My Web services | FullStack</title>
        <meta name="description" content="A freelancer with React, Next.js, Node.js, and Django Skills - Looking to explore the technologies with your ideas." />
        <link rel="icon" href='https://www.svgrepo.com/show/225051/cpu.svg' />
      </Head>
      <div class="py-16 bg-slate-900">
        <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div class="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 class="text-4xl text-gray-300 font-bold md:text-5xl">Ping now and benefit up to <span class="text-blue-500">30% off</span></h1>
              <p class="text-lg">Be part of people around the world using my services in modern User Interfaces.</p>
              <div class="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                  <span class="block text-white font-semibold">
                    Start conecting
                  </span>
                </button>
                <button type="button" title="more about" class="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                  <span class="block text-gray-600 font-semibold">
                    <a href='/developer'>More about</a>
                  </span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
              <div class="col-span-2 row-span-4">
                <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp" class="rounded-full" width="640" height="960" alt="shoes" loading="lazy" />
              </div>
              <div class="col-span-2 row-span-2">
                <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp" class="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy" />
              </div>
              <div class="col-span-3 row-span-3">
                <img src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp" class="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-16 bg-purple-200">
        <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-purple-900">Web Design</h3>
                <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                <a href="#" class="block font-medium text-purple-600">Know more</a>
              </div>
              <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-purple-900">Web Development</h3>
                <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                <a href="#" class="block font-medium text-purple-600">Know more</a>
              </div>
              <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-purple-900">WordPress Design</h3>
                <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                <a href="#" class="block font-medium text-purple-600">Know more</a>
              </div>
              <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services;