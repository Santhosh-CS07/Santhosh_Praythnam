import React from 'react';
import ProjectCard from '../components/ProjectCard'
import Head from "next/head";


const projects = () => {
    return (
        <div>
            <Head>
                <title>My FullStack Work | Projects</title>
                <meta name="description" content="A freelancer with React, Next.js, Node.js, and Django Skills - Looking to explore the technologies with your ideas." />
                <link rel="icon" href='https://www.svgrepo.com/show/225051/cpu.svg' />
            </Head>
            <ProjectCard />
        </div>
    )
}

export default projects;