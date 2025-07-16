import About from "./components/About";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Partners />
      <About />
      <Services />
    </>
  );
}
