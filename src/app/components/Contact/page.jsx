"use client"
import React, { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../btn/btn";
function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setTextEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setTextMessage(e.target.value);
  };

  const isAnyInputEmpty =
    !firstName.trim() || !lastName.trim() || !textEmail.trim() || !textMessage.trim();

  const handleTeleClick = () => {
    if (isAnyInputEmpty) {
      alert("Inputs are empty");
    } else {
      const url = `
      https://api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=Name:${firstName} ${lastName}%0AEmail:${textEmail}%0AMessage:${textMessage}
      `;
      fetch(url,{
        method:"POST"
      })
      alert("Successfully");
    }
  };

  return (
    <section className={styles.sec}>
      <Button title="Form" social="#" />
      <form className={styles.form}>
        <input
          onChange={handleFirstName}
          type="text"
          placeholder="First Name"
        />
        <input onChange={handleLastName} type="text" placeholder="Last Name" />
        <input onChange={handleEmail} type="email" placeholder="Email" />
        <input
          onChange={handleMessage}
          type="text"
          placeholder="Your Message"
        />
      </form>
      <a
        onClick={handleTeleClick}
        className={styles.formBtn}
        href={"#"}
        target="_blank"
        style={{ pointerEvents: isAnyInputEmpty ? "none" : "auto" }}
      >
        {isAnyInputEmpty ? "The form is empty" : "Send "}
      </a>
    </section>
  );
}

export default Page;
