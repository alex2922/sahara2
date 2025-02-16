import BlackBorder from "./(component)/border/BlackBorder";
import GreyBorder from "./(component)/border/GreyBorder";
import About from "./(component)/home/about/About";
import Activity from "./(component)/home/activity/Activity";
import FAQ from "./(component)/home/faq/FAQ";
import Hero from "./(component)/home/hero/Hero";
import Testimonial from "./(component)/home/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <BlackBorder flip={true} margin={"-96px"} />
      <div id="about">
        <About />
      </div>

      <GreyBorder margin={"-100px"} />

      <div id="activities">
      <Activity />
      </div>
      <BlackBorder flip={true} margin={"-96px"} />

      <Testimonial />
      <GreyBorder margin={"-100px"} />

      <FAQ />
      <BlackBorder flip={true} margin={"-96px"} />
    </>
  );
}
