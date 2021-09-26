import Head from "next/head";

// Parts
import Home_part from "../components/Home_part/Home_part";
import Work_part from "../components/Work_part/Work_part";
import About_part from "../components/About_part/About_part";
import Contact_part from "../components/Contact_part/Contact_part";

import ScrollOnClickElement from "../components/ScrollOnClickElement/ScrollOnClickElement";
import AnimatedBackground from "../components/AnimatedBackground/AnimatedBackground";

//GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    //Scroll to top of the webpage to prevent initial GSAP animations collision
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Jakub Smetana</title>
        <meta
          name="description"
          content="Developer portfolio of Jakub Smetana"
        />
        <link rel="icon" href="/images/selfie.jpg" />
      </Head>

      <ScrollOnClickElement />
      <AnimatedBackground />

      <Home_part />
      <Work_part />
      <About_part />
      <Contact_part />
    </>
  );
}
