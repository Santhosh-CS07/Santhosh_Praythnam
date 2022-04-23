import React from 'react';
import ProjectCard from '../components/ProjectCard'
import Head from "next/head";


const projects = () => {
    return (
        <div>
            <Head>
                <title>Our work with top Tech's</title>
            </Head>
            <ProjectCard />
        </div>
    )
}

export default projects;