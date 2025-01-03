import Header from "./compnenets/header";
import Footer from "./compnenets/footer";
import Skills from "./compnenets/skills";
import Leadership from "./compnenets/leadership";
import Project from "./compnenets/project/project";
import Experience from "./compnenets/experience";
import About from "./compnenets/about";
import Hero from "./compnenets/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Leadership />
      <Skills />
      <Footer />
    </div>
  );
}
