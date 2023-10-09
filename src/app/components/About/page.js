import React from "react";
import styles from "./About.module.css";
import { lazy } from "react";
// Sample data for the cards
const Button = lazy(() => import("../btn/btn"));
const Card = lazy(() => import("../cards/page"));
const cardData = [
  {
    title: "HTML",
    info: "HTML is a programming language used to create web pages, defining their structure and content using tags.",
  },
  {
    title: "CSS",
    info: "CSS is a web technology for styling and formatting HTML elements to control the appearance and layout of web pages.",
  },
  {
    title: "JavaScript",
    info: "JavaScript (JS) is a versatile scripting language used in web development to add interactivity and dynamic behavior to web pages, making them responsive and engaging for users",
  },
  {
    title: "BootStrap",
    info: "Bootstrap is a widely-used front-end framework that streamlines web development with pre-made CSS and JavaScript components, facilitating the creation of responsive and visually appealing websites.",
  },
  {
    title: "Tailwind",
    info: "Tailwind CSS is a utility-first CSS framework that simplifies web styling through a wide range of utility classes.",
  },
  {
    title: "SASS",
    info: "Sass is a CSS preprocessor that enhances stylesheet development with features like variables, nesting, and functions, improving code organization and reusability.",
  },
  {
    title: "React.js",
    info: "React.js is an open-source JavaScript library for building interactive web user interfaces, renowned for its component-based structure and efficient virtual DOM, making it a popular choice in modern web development.",
  },
  {
    title: "Next.js",
    info: "Next.js, built on React, simplifies web app development with server-side rendering, automatic code splitting, and routing, enhancing performance and SEO friendliness, making it a favored choice for modern web applications.",
  },
  {
    title: "React Native",
    info: "React Native simplifies cross-platform mobile app development using JavaScript and React.",
  },
];

function Btn() {
  return (
    <section className={styles.sec}>
      <h1 className={styles.btnParent}>
        <Button title="About" social="#"/>
      </h1>
      <h2 className={styles.cardsListParent}>
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} info={card.info} />
        ))}
      </h2>
    </section>
  );
}

export default React.memo(Btn);
