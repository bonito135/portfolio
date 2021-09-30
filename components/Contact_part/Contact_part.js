import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

//css
import styles from "./Contact_part.module.scss";

//images
import whatsappIcon from "../../public/images/whatsappicon.png";
import facebookIcon from "../../public/images/facebookicon.png";
import githubIcon from "../../public/images/githubicon.png";

// Components
import MailSentAlert from "./MailSentAlert/MailSentAlert";

//GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Contact_part() {
  const [mailWasSent, setMailWasSent] = useState(false);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendMail = async () => {
    console.log(emailRef.current.value);
    console.log(
      emailRef.current.value.match(
        "[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}"
      )
    );
    if (
      emailRef.current.value.match(
        "[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}"
      ) != null
    ) {
      const emailValue = emailRef.current.value;
      const messageValue = messageRef.current.value;

      const combinedValues = { email: emailValue, message: messageValue };

      const mailFetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedValues),
      };

      const response = await fetch("/api/sendMail", mailFetchOptions);

      const parsedResponse = await response.json();
      console.log(parsedResponse);

      if (parsedResponse.emailSent) {
        setMailWasSent(true);
      }
    }
  };

  const MailSentAlertSwitch = () => {
    if (mailWasSent) {
      return <MailSentAlert />;
    }

    return null;
  };

  const setInitialAnimationState = () => {
    gsap.set("#emailInputBlock", {
      opacity: 0,
      x: -100,
    });

    gsap.set("#messageInputBlock", {
      opacity: 0,
      x: 100,
    });

    gsap.set("#sendMailButton", {
      opacity: 0,
      y: -100,
    });

    gsap.set("#iconsBlock", {
      opacity: 0,
      y: 100,
    });
  };

  const startContactPartAnimationScrollTrigger = () => {
    ScrollTrigger.defaults({
      ease: "power3.out",
      duration: 1,
    });

    const revealContactPartContent = () => {
      gsap.to("#emailInputBlock", {
        opacity: 1,
        x: 0,
      });

      gsap.to("#messageInputBlock", {
        opacity: 1,
        x: 0,
      });

      gsap.to("#sendMailButton", {
        opacity: 1,
        y: 20,
      });

      gsap.to("#iconsBlock", {
        opacity: 1,
        y: 0,
      });
    };

    const hideContactPartContent = () => {
      gsap.to("#emailInputBlock", {
        opacity: 0,
        x: -100,
      });

      gsap.to("#messageInputBlock", {
        opacity: 0,
        x: 100,
      });

      gsap.to("#sendMailButton", {
        opacity: 0,
        y: -100,
      });

      gsap.to("#iconsBlock", {
        opacity: 0,
        y: 100,
      });
    };

    ScrollTrigger.create({
      trigger: "#contact_part",
      start: "-100px center",
      onEnter: () => revealContactPartContent(),
      onLeaveBack: () => hideContactPartContent(),
    });
  };

  useEffect(() => {
    setInitialAnimationState();
    startContactPartAnimationScrollTrigger();
  }, []);

  return (
    <div className={`${styles.contact_part} contact_part`} id="contact_part">
      {mailWasSent ? (
        <MailSentAlertSwitch />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={styles.form}
        >
          <h1>/Get in touch</h1>

          <div className={styles.email_input_block} id="emailInputBlock">
            <label htmlFor="email">Your e-mail</label>
            <input
              ref={emailRef}
              id="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}"
              title="The field input must be in email adress format"
              required
            ></input>
          </div>

          <div className={styles.message_input_block} id="messageInputBlock">
            <label htmlFor="message">Your message</label>
            <textarea
              ref={messageRef}
              id="message"
              type="text"
              required
            ></textarea>
          </div>

          <button type="submit" onClick={sendMail} id="sendMailButton">
            Send
          </button>

          <div className={styles.icons_block} id="iconsBlock">
            <a
              href="whatsapp://send?phone=420777991350"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width="40"
                height="40"
                className={styles.image}
                alt="whatsappicon"
                src={whatsappIcon}
              />
            </a>

            <a
              href="https://github.com/bonito135"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className={styles.image}
                width="40"
                height="40"
                alt="githubicon"
                src={githubIcon}
              />
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
