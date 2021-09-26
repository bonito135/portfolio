import React, { useEffect } from "react";
import Image from "next/image";

//css
import styles from "./About_part.module.scss";

//images
import selfiePic from "../../public/images/selfie.jpg";

//GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About_part() {
  const setInitialAnimationState = () => {
    gsap.set("#nameHeading", {
      opacity: 0,
      y: -100,
    });

    gsap.set("#devHeading", {
      opacity: 0,
      y: 100,
    });

    gsap.set("#selfiePic", {
      opacity: 0,
      x: "10vw",
    });

    gsap.set("#noticeParagraph", {
      opacity: 0,
      y: 100,
    });
  };

  const startAboutPartAnimationsScrollTrigger = () => {
    const revealAboutPartContent = () => {
      gsap.to("#nameHeading", {
        opacity: 1,
        y: 0,
      });

      gsap.to("#devHeading", {
        opacity: 1,
        y: 0,
      });

      gsap.to("#selfiePic", {
        opacity: 0.3,
        x: "25vw",
      });
    };

    const hideAboutPartContent = () => {
      gsap.to("#nameHeading", {
        opacity: 0,
        y: -100,
      });

      gsap.to("#devHeading", {
        opacity: 0,
        y: 100,
      });

      gsap.to("#selfiePic", {
        opacity: 0,
        x: "10vw",
      });
    };

    ScrollTrigger.defaults({
      ease: "power3.out",
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: ".about_part",
      start: "100px center",
      end: "1050px center",
      onEnter: () => revealAboutPartContent(),
      onLeave: () => hideAboutPartContent(),
      onEnterBack: () => revealAboutPartContent(),
      onLeaveBack: () => hideAboutPartContent(),
    });

    const revealNoticeParagraph = () => {
      gsap.to("#noticeParagraph", {
        opacity: 1,
        y: 0,
      });
    };

    const hideNoticeParagraph = () => {
      gsap.to("#noticeParagraph", {
        opacity: 0,
        y: 100,
      });
    };

    ScrollTrigger.create({
      trigger: "#noticeParagraph",
      start: "-300px center",
      end: "200px center",
      onEnter: () => revealNoticeParagraph(),
      onLeave: () => hideNoticeParagraph(),
      onEnterBack: () => revealNoticeParagraph(),
      onLeaveBack: () => hideNoticeParagraph(),
    });
  };

  useEffect(() => {
    setInitialAnimationState();
    startAboutPartAnimationsScrollTrigger();
  }, []);

  return (
    <div className={`${styles.about_part} about_part`}>
      <div className={styles.center}>
        <div className={styles.nameHeading} id="nameHeading">
          <div className={styles.paragraph_div}>
            <p>Hi,</p>
            <p>my name is</p>
          </div>
          <h2>Jakub</h2>
          <h2>Smetana</h2>
        </div>
        <div className={styles.selfiePic} id="selfiePic">
          <Image src={selfiePic} alt="selfie" />
        </div>
        <div className={styles.devHeading} id="devHeading">
          <div>
            <p>I am passionate</p>
            <p>and curious</p>
          </div>
          <h2>web</h2>
          <h2>developer</h2>
        </div>
        <div className={styles.noticeParagraph} id="noticeParagraph">
          <div>
            <p>
              Do you need <span>website</span> or <span>web app</span>?
            </p>
            <p>I am your guy!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
