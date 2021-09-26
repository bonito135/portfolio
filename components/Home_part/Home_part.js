import React, { useEffect } from "react";

//CSS
import styles from "./Home_part.module.scss";

//GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home_part() {
  const tl = gsap.timeline();

  const setTextPropertiesForAnimation = () => {
    gsap.set("#made", {
      opacity: 0,
      y: "-5vmin",
    });

    gsap.set("#with", {
      opacity: 0,
      x: "-10vmin",
    });

    gsap.set("#passion", {
      opacity: 0,
      y: "5vmin",
    });
  };

  const revealText = () => {
    tl.to("#made", {
      y: "0vmin",
      opacity: 1,
      duration: 2,
      delay: 0.3,
      ease: "power1.out",
    });

    tl.to("#with", {
      x: "-4vmin",
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      delay: -1.5,
    });

    tl.to("#passion", {
      y: "0vmin",
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      delay: -1.5,
    });
  };

  const activateScrollTrigger = () => {
    ScrollTrigger.create({
      trigger: "home_part",
      start: "start start",
      end: "800 center",
      //markers: true,
      id: "homepart",
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
    });
  };

  useEffect(() => {
    setTextPropertiesForAnimation();
    revealText();
    activateScrollTrigger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.home_part} home_part`} id="home_part">
      <div className={styles.center}>
        <h1 id="made">Made</h1>
        <h1 id="with">with</h1>
        <h1 id="passion">passion</h1>
      </div>
    </div>
  );
}
