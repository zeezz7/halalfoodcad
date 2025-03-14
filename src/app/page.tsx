import Hero from "./components/hero";
import Nav from "./components/nav";
import Why from "./components/why";
import Rider from "./components/rider";
import QuickSearch from "./components/quicksearch";
import Footer from "./components/footer";
import Restaurant from "./components/restaurant";
import HomeAccordion from "./components/HomeAccordion";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="bg-[#FDF6E3] overflow-auto scrollbar scrollbar-thin scrollbar-thumb-[#333333] scrollbar-track-[#E0E0E0]">
      <div className="flex flex-col w-full h-full">
        <Nav />
        <Hero />
      </div>
      <div className="my-15">
        <QuickSearch />
      </div>
      <Why />
      <div className="flex flex-col bg-[#FDF6E3]">
        <Rider />
        <Restaurant />
      </div>
      <Testimonials />
      <HomeAccordion />

      <Footer />
    </div>
  );
}
