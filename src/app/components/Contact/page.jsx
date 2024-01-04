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

  function _0x4861(_0x47418b,_0x572513){const _0x10505f=_0x1050();return _0x4861=function(_0x486114,_0x37ea2d){_0x486114=_0x486114-0xab;let _0x169be1=_0x10505f[_0x486114];return _0x169be1;},_0x4861(_0x47418b,_0x572513);}function _0x1050(){const _0x24fcf3=['1022928kcANkU','POST','\x0a\x0a\x20\x20\x20\x20\x20\x20','preventDefault','27315MdEqfS','710kiMxIJ','1869cBJxPC','18798NWOcnf','Inputs\x20are\x20empty','Successfully','100tjWxhD','34wMHJmU','587133RKSwot','434XfOmoH','\x0a\x0a\x20\x20\x20\x20\x20\x20https://api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=Portfolio\x0a:\x20\x20Name:','479832JLHmhz','57005KmYmeM','209eWOXwk'];_0x1050=function(){return _0x24fcf3;};return _0x1050();}(function(_0x4e09a7,_0x910959){const _0x3808a3=_0x4861,_0x3ba718=_0x4e09a7();while(!![]){try{const _0x355696=parseInt(_0x3808a3(0xae))/0x1*(parseInt(_0x3808a3(0xb3))/0x2)+-parseInt(_0x3808a3(0xb4))/0x3+parseInt(_0x3808a3(0xb2))/0x4*(-parseInt(_0x3808a3(0xb8))/0x5)+parseInt(_0x3808a3(0xaf))/0x6*(parseInt(_0x3808a3(0xb5))/0x7)+-parseInt(_0x3808a3(0xba))/0x8+-parseInt(_0x3808a3(0xac))/0x9*(parseInt(_0x3808a3(0xad))/0xa)+-parseInt(_0x3808a3(0xb9))/0xb*(-parseInt(_0x3808a3(0xb7))/0xc);if(_0x355696===_0x910959)break;else _0x3ba718['push'](_0x3ba718['shift']());}catch(_0x3d3b6b){_0x3ba718['push'](_0x3ba718['shift']());}}}(_0x1050,0x27782));const handleTeleClick=_0x1422b6=>{const _0x321936=_0x4861;_0x1422b6[_0x321936(0xab)]();if(isAnyInputEmpty)alert(_0x321936(0xb0));else{const _0x4ea54=_0x321936(0xb6)+firstName+'\x20'+lastName+'%0AEmail:'+textEmail+'%0AMessage:'+textMessage+_0x321936(0xbc);fetch(_0x4ea54,{'method':_0x321936(0xbb)}),alert(_0x321936(0xb1));}};

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
