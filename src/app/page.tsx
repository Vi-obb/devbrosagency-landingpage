import Hero from "./Hero";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Outro from "./Outro";
import Services from "./Services";
import Approach from "./Approach";
import Footer from "./Footer";
import { services } from "../../utils/services";
import { approaches } from "../../utils/approach";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Services services={services} />
      <Approach approaches={approaches} />
      <Outro />
      <Footer />
    </main>
  );
}
