// import Home from "./components/home/page";
import { Suspense } from "react";
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
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Homepage />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AboutPage />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <InfoPage />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Work />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </>
  );
}
