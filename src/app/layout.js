import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Askander",
  description:
    "Welcome to Askander's portfolio. Explore my web and mobile development projects and skills.",
};

export const metaVerification = {
  name: "google-site-verification",
  content: "aVqvQ1w3xxZHIxtG2sBMaOBi8OzN1A77jdsIJk7eCSs",
};

{/* <meta name="robots" content="index, follow"> */}
export const metaRobots = {
  name:"robots",
  content:"index, follow",
}

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
