import React, { useEffect } from "react";
import Image from "next/image";

//CSS
import styles from "./Work_part.module.scss";

//Images
import spotifyAppImage from "../../public/images/spotifyAppImage.jpg";
import dinoPreview3D from "../../public/images/dinoPreview3D.jpg";

//GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Work_part() {
  const setInitialParameters = () => {
    gsap.set("#block1", {
      x: 100,
      opacity: 0,
    });

    gsap.set("#block2", {
      x: -100,
      opacity: 0,
    });

    /* gsap.set("#block3", {
      x: 100,
      opacity: 0,
    }); */
  };

  const startWorkPartAnimations = () => {
    const revealBlock1 = () => {
      gsap.to("#block1", {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        duration: 1,
      });
    };

    const hideBlock1 = () => {
      gsap.to("#block1", {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        duration: 1,
      });
    };

    ScrollTrigger.create({
      trigger: "#block1",
      start: "-200 center",
      end: "400 center",
      //markers: true,

      onEnter: () => revealBlock1(),
      onLeave: () => hideBlock1(),
      onEnterBack: () => revealBlock1(),
      onLeaveBack: () => hideBlock1(),
    });

    const revealBlock2 = () => {
      gsap.to("#block2", {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        duration: 1,
      });
    };

    const hideBlock2 = () => {
      gsap.to("#block2", {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        duration: 1,
      });
    };

    ScrollTrigger.create({
      trigger: "#block2",
      start: "-200 center",
      end: "400 center",
      //markers: true,

      onEnter: () => revealBlock2(),
      onLeave: () => hideBlock2(),
      onEnterBack: () => revealBlock2(),
      onLeaveBack: () => hideBlock2(),
    });

    /* const revealBlock3 = () => {
      gsap.to("#block3", {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        duration: 1,
      });
    };

    const hideBlock3 = () => {
      gsap.to("#block3", {
        opacity: 0,
        x: 100,
        ease: "power3.out",
        duration: 1,
      });
    };

    ScrollTrigger.create({
      trigger: "#block3",
      start: "-200 center",
      end: "400 center",
      //markers: true,

      onEnter: () => revealBlock3(),
      onLeave: () => hideBlock3(),
      onEnterBack: () => revealBlock3(),
      onLeaveBack: () => hideBlock3(),
    }); */
  };

  const blurImage1 = () => {
    gsap.to("#image1", {
      filter: "blur(3px) saturate(0)",
      cursor: "pointer",
      delay: 0.2,
      duration: 0.3,
    });
  };

  const deblurImage1 = () => {
    gsap.to("#image1", {
      filter: "blur(0px) saturate(0)",
      delay: 0.2,
      duration: 0.3,
    });
  };

  const blurImage2 = () => {
    gsap.to("#image2", {
      filter: "blur(3px) saturate(0)",
      cursor: "pointer",
      delay: 0.2,
      duration: 0.3,
    });
  };

  const deblurImage2 = () => {
    gsap.to("#image2", {
      filter: "blur(0px) saturate(0)",
      delay: 0.2,
      duration: 0.3,
    });
  };

  /* const blurImage3 = () => {
    gsap.to("#image3", {
      filter: "blur(3px) saturate(0)",
      cursor: "pointer",
      delay: 0.2,
      duration: 0.3,
    });
  };

  const deblurImage3 = () => {
    gsap.to("#image3", {
      filter: "blur(0px) saturate(0)",
      delay: 0.2,
      duration: 0.3,
    });
  }; */

  const openSpotigyApp = () => {
    window.open("https://vibefinder.herokuapp.com/", "_blank");
  };

  const open3DDinoWebpage = () => {
    window.open("https://dino-preview.vercel.app/", "_blank");
  };

  useEffect(() => {
    setInitialParameters();
    startWorkPartAnimations();
  }, []);

  return (
    <div className={`${styles.work_part} work_part`}>
      <div className={styles.center}>
        <div className={`${styles.project_block} project_block`} id="block1">
          <div className={styles.text_block}>
            <h4>Vibefinder</h4>
            <p>
              An application used for sharing songs with help of Spotify API.
            </p>
          </div>
          <div className={styles.preview_block} onClick={openSpotigyApp}>
            <div
              onMouseEnter={blurImage1}
              onMouseLeave={deblurImage1}
              className={styles.image}
              id="image1"
            >
              <Image
                placeholder="blur"
                alt="spotifyAppIcon"
                src={spotifyAppImage}
              />
            </div>
            <div className={`${styles.button_container} button_container`}>
              <button className="button">OPEN</button>
            </div>
          </div>
        </div>

        <div className={styles.project_block} id="block2">
          <div className={styles.preview_block} onClick={open3DDinoWebpage}>
            <div
              onMouseEnter={blurImage2}
              onMouseLeave={deblurImage2}
              className={styles.image}
              id="image2"
            >
              <Image
                placeholder="blur"
                alt="spotifyAppIcon"
                src={dinoPreview3D}
              />
            </div>
            <div className={`${styles.button_container} button_container`}>
              <button className="button">OPEN</button>
            </div>
          </div>

          <div className={styles.text_block}>
            <h4>3D preview webpage</h4>
            <p>A little project to preview 3D models of dinosaurs.</p>
          </div>
        </div>

        {/* <div className={styles.project_block} id="block3">
          <div className={styles.text_block}>
            <h4>Song sharing app</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              faucibus nisl eget metus elementum.
            </p>
          </div>
          <div className={styles.preview_block}>
            <div
              onMouseEnter={blurImage3}
              onMouseLeave={deblurImage3}
              className={styles.image}
              id="image3"
            >
              <Image
                placeholder="blur"
                alt="spotifyAppIcon"
                src={spotifyAppImage}
              />
            </div>
            <div className={`${styles.button_container} button_container`}>
              <button className="button">OPEN</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
