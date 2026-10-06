import InitialLoader from "./components/InitialLoader";
import ScrollFX from "./components/ScrollFX";
import Reveal from "./components/Reveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Services from "./components/Services";
import GitHubActivity from "./components/GitHubActivity";
import Hobbies from "./components/Hobbies";
import Talks from "./components/Talks";
import BlogPosts from "./components/BlogPosts";
import Friends from "./components/Friends";
import Guestbook from "./components/Guestbook";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <InitialLoader>
      <div className="bg-photo" aria-hidden />
      <div className="bg-veil" aria-hidden />
      <ScrollFX />
      <Reveal />

      <div className="progress" aria-hidden>
        <i data-progress />
      </div>

      <div className="ambient" aria-hidden />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Services />
        <GitHubActivity />
        <Hobbies />
        <Talks />
        <BlogPosts />
        <Friends />
        <Guestbook />
      </main>

      <Footer />
    </InitialLoader>
  );
}