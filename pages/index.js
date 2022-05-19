import Head from "next/head";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services";
import Vision from "./vision";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="A Software Engineer with React, Next.js, Node.js, and MongoDB Skills - Looking to explore the technologies with your ideas." />
        <link rel="icon" href='https://www.svgrepo.com/show/225051/cpu.svg' />
      </Head>
      <HeroPage />
      <Services />
      <Vision />
      <Technologies />
      <Contact />
    </div>
  );
}

export default Home;
