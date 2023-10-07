// import Home from "./components/home/page";
import { Suspense } from "react";
import dynamic from "next/dynamic";
let Homepage = dynamic(() => import("./components/home/page"), {
  ssr: true,
});
let Navbar = dynamic(() => import("./components/navbar/page"), {
  ssr: true,
});
let AboutPage = dynamic(() => import("./components/About/page"), {
  ssr: true,
});

let InfoPage = dynamic(() => import("./components/info/page"), {
  ssr: true,
});

let Work = dynamic(() => import("./components/work/page"), {
  ssr: true,
});

let Loading = dynamic(() => import("./loading/loading"), {
  ssr: true,
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
    </>
  );
}
