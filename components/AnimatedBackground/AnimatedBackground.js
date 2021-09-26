import React, { useEffect } from "react";
import styles from "./AnimatedBackground.module.scss";

//GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function AnimatedBackground() {
  //Colors
  const primaryColor = "#ffdd00";
  const secondaryColor = "#5f16a8";

  // Animations
  const initialAnimation = () => {
    gsap.from(".animatingElement", {
      borderColor: "transparent",
      x: 100,
      y: 100,
      duration: 1,
      delay: 0.2,
      ease: "back.out(1.7)",
    });
  };

  const activateScrollTrigger = () => {
    // Defaults
    ScrollTrigger.defaults({
      toggleActions: "restart none none none",
      //markers: true,
      duration: 0.5,
    });

    const startWorkPartAnimation = () => {
      gsap.to(".animatingElement", {
        borderColor: primaryColor,
        borderWidth: "7vmin",
        scale: 1.8,
        ease: "power1.out",
        duration: 0.5,
      });
    };

    const returnToInitialStyle = () => {
      gsap.to(".animatingElement", {
        borderColor: secondaryColor,
        borderWidth: "5px",
        scale: 1,
        ease: "power1.out",
        duration: 0.6,
        delay: 0.05,
      });
    };

    ScrollTrigger.create({
      trigger: ".work_part",
      start: "-100px center",
      end: "100% center",
      id: "work",
      onEnter: () => startWorkPartAnimation(),
      onLeaveBack: () => returnToInitialStyle(),
    });
  };

  useEffect(() => {
    initialAnimation();
    activateScrollTrigger();
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.animatingElement}  animatingElement`}>
        <div className={`${styles.arrowToRight} arrowToRight`}></div>
      </div>
    </div>
  );
}
