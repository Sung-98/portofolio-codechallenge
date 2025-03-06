import Hero from "./components/hero";
import About from "./components/about";
import Portofolio from "./components/portofolio";
import Clients from "./components/clients";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Portofolio/>
      <Clients/>
      <Contact/>
    </div>
  ) 
}
