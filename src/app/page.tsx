import Hero from "./components/hero";
import About from "./components/about";
import Portofolio from "./components/portofolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Portofolio/>
      <Testimonials/>
      <Contact/>
    </div>
  ) 
}
