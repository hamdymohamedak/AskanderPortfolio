"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../btn/btn";

function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [all, setAll] = useState("");

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

  const handleAll = () => {
    const url = `https://wa.me/+201278859768?text=Name:${firstName} ${lastName}%0AEmail:${textEmail}%0AMessage:${textMessage}`;
    setAll(url);
  };

  const isAnyInputEmpty = !firstName || !lastName || !textEmail || !textMessage;

  const handleGoClick = () => {
    if (isAnyInputEmpty) {
      alert("Inputs are empty");
    } else {
      handleAll();
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
        className={styles.formBtn}
        href={isAnyInputEmpty ? "#" : all}
        onClick={handleGoClick}
        style={{ pointerEvents: isAnyInputEmpty ? "none" : "auto" }}
      >
        {isAnyInputEmpty === "" ? "" : "Go"}
      </a>
    </section>
  );
}

export default Page;
