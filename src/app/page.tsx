"use client";

import { useEffect } from "react";
import InitialLoader from "./components/InitialLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Status from "./components/Status";
import Personality from "./components/Personality";
import Hobbies from "./components/Hobbies";
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";

function ClientEffects() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal-section > .reveal-content, footer");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export default function Home() {
  return (
    <InitialLoader>
      <ClientEffects />
      <Navbar />
      <main style={{ paddingTop: 72, position: "relative" }}>
        <Hero />
        <About />
        <Skills />
        <Status />
        <Personality />
        <Hobbies />
        <Thanks />
      </main>
      <Footer />
    </InitialLoader>
  );
}