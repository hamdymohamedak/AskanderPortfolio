// import Home from "./components/home/page";
import dynamic from "next/dynamic";
let Homepage = dynamic(() => import("./components/home/page"), {
  ssr: false,
});
let Navbar = dynamic(() => import("./components/navbar/page"), {
  ssr: false,
});
let AboutPage = dynamic(() => import("./components/About/page"), {
  ssr: false,
});

let InfoPage = dynamic(() => import("./components/info/page"), {
  ssr: false,
});

let Work = dynamic(() => import("./components/work/page"), {
  ssr: false,
});

let Footer = dynamic(() => import("./components/footer/page"), {
  ssr: false,
});
let Contact = dynamic(() => import("./components/Contact/page"), {
  ssr: false,
});

let Loading = dynamic(() => import("./loading/loading"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
        <Navbar />
        <Homepage />
        <AboutPage />
        <InfoPage />
        <Work />
        <Contact />
        <Footer />
    </>
  );
}
