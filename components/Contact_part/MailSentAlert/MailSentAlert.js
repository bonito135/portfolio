import React from "react";
import styles from "./MailSentAlert.module.scss";

export default function MailSentAlert() {
  return (
    <div className={styles.mail_sent_alert}>
      <h1>Email was successfully sent!</h1>
    </div>
  );
}
