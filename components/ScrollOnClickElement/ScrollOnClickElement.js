import React, { useEffect, useState } from "react";

import Image from "next/image";

//CSS
import styles from "./ScrollOnClickElement.module.scss";

//GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ScrollOnClickElement() {
  const [messageButtonIsUp, setMessageButtonIsUp] = useState(true);

  const startInitialAnimation = () => {
    gsap.from("#scrollOnClickElement", {
      scale: 0,
      opacity: "0",
      right: "40vmax",
      y: "-25vh",
      duration: 1.3,
      ease: "back.out(1.3)",
      delay: 0.5,
    });
  };

  const activateScrollTrigger = () => {
    ScrollTrigger.defaults({
      duration: 0.8,
      delay: 0.1,
      ease: "power1.out",
    });
    // Change text to mail icon and move it
    const scrollOnClickElementToGoDownAndChangeFromTextToMailIcon = () => {
      gsap.to("#scrollOnClickElement", {
        y: "50vh",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
      });

      gsap.to("#containerElement", {
        marginTop: "-50px",
      });
    };

    const scrollOnClickElementToGoUpAndChangeFromMailIconToText = () => {
      gsap.to("#scrollOnClickElement", {
        right: "25vmax",
        y: "0",
        width: "120px",
        height: "50px",
        borderRadius: "20px",
      });

      gsap.to("#containerElement", {
        marginTop: "0px",
      });
    };

    ScrollTrigger.create({
      trigger: ".work_part",
      start: "-20% center",
      end: "100% center",
      onEnter: () => scrollOnClickElementToGoDownAndChangeFromTextToMailIcon(),
      onLeaveBack: () =>
        scrollOnClickElementToGoUpAndChangeFromMailIconToText(),
    });

    // Change mail icon to arrow up
    const scrollOnClickElementToChangeFromMailIconToArrowUp = () => {
      gsap.to("#containerElement", {
        marginTop: "-100px",
      });
    };

    const scrollOnClickElementToChangeFromArrowUpToMailIcon = () => {
      gsap.to("#containerElement", {
        marginTop: "-50px",
      });
    };

    ScrollTrigger.create({
      trigger: ".contact_part",
      start: "-20% center",
      end: "100% center",
      onEnter: () => scrollOnClickElementToChangeFromMailIconToArrowUp(),
      onLeaveBack: () => scrollOnClickElementToChangeFromArrowUpToMailIcon(),
    });

    // Change state of ScrollOnClickElement position
    ScrollTrigger.create({
      trigger: ".contact_part",
      start: "-20% center",
      end: "100% center",
      onEnter: () => setMessageButtonIsUp(false),
      onLeaveBack: () => setMessageButtonIsUp(true),
    });
  };

  const scrollDownOrUpBasedOnPosition = () => {
    console.log(messageButtonIsUp);
    if (messageButtonIsUp) {
      document
        .getElementById("contact_part")
        .scrollIntoView({ behavior: "smooth" });
    }

    if (!messageButtonIsUp) {
      document
        .getElementById("home_part")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    startInitialAnimation();
    activateScrollTrigger();
  }, []);

  return (
    <div
      onClick={scrollDownOrUpBasedOnPosition}
      className={styles.scrollOnClickElement}
      id="scrollOnClickElement"
    >
      <div className={styles.containerElement} id="containerElement">
        <p className={styles.sendAMessageText} id="sendAMessageText">
          Send a message
        </p>
        <div className={styles.messageIcon} id="messageIcon">
          <Image
            alt="messageIcon"
            width="30px"
            height="30px"
            src="/images/sendMessageIcon.png"
          ></Image>
        </div>
        <div className={styles.arrowUp} id="arrowUp"></div>
      </div>
    </div>
  );
}
