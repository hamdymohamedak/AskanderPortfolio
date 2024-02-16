import "./globals.css";
import favicon from "./logo.png";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export const metadata = {
  title: "Askander",
  description:
    "Welcome to Askander portfolio. Explore my web and mobile development projects and skills.",
};
export const metaRobots = {
  name: "robots",
  content: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <Head>
        <meta
          property="og:title"
          content="Askander - Front End Developer | Next.js | React Native"
        />
        <meta
          property="og:description"
          content="I'm Askander, a Front End Developer specializing in Next.js and React Native for mobile. Discover my work and expertise."
        />
        <meta
          property="og:image"
          content="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/384550840_881373160178410_1443430486526755727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=0vP6_Y9LJdgAX8sWIof&_nc_ht=scontent.fcai19-8.fna&oh=00_AfCcrOcEcJwWHJZGZE6akmNHsQ5GeV0pgmlygfSi9k15oQ&oe=6527E27A"
        />
        <meta property="og:url" content="https://askander.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Askander - Front End Developer | Next.js | React Native"
        />
        <meta
          name="twitter:description"
          content="I'm Askander, a Front End Developer specializing in Next.js and React Native for mobile. Discover my work and expertise."
        />
        <meta
          name="twitter:image"
          content="https://twitter.com/HamdyMohamedd1"
        />

        <meta property="og:title" content="Hamdy Mohamed Askander" />
        <meta
          property="og:description"
          content="Learn more about me and my work as a Front End Developer specializing in Next.js and React Native for mobile."
        />
        <meta
          property="og:image"
          content="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/384550840_881373160178410_1443430486526755727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=0vP6_Y9LJdgAX8sWIof&_nc_ht=scontent.fcai19-8.fna&oh=00_AfCcrOcEcJwWHJZGZE6akmNHsQ5GeV0pgmlygfSi9k15oQ&oe=6527E27A"
        />
        <meta
          property="og:url"
          content="https://www.facebook.com/hamdy.elgokar.5"
        />

        <link rel="canonical" href="https://askander.vercel.app/" />
        <link rel="icon" href={favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
