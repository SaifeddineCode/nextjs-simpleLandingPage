import About from "./components/About";
import Expertises from "./components/Expertises";
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
      <Expertises />
    </>
  );
}
