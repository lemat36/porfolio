import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
