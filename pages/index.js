import Head from "next/head";
import HeroPage from "../pages/heroPage";
import Technologies from "./technologies";
import Services from "../components/Services";
import Vision from "./vision";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Head>
        <title>Computer Technology Company</title>
        <meta name="description" content="A computer software company building Tools on Languages and The future Technologies." />
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
