// page.tsx
// import Hero from "./components/hero";
// import Nav from "./components/nav";
// import Why from "./components/why";
// import Rider from "./components/rider";
// import Footer from "./components/footer";
// import Restaurant from "./components/restaurant";
// import HomeAccordion from "./components/HomeAccordion";

// export default function Home() {
//   return (
//     <div className="bg-[#FFFAEA]  overflow-auto scrollbar scrollbar-thin scrollbar-thumb-[#1B3B31] scrollbar-track-[#f0f0f0]">
//       <div className="flex flex-col  w-full h-full">
//         <Nav />
//         <Hero />
//       </div>
//       <Why />
//       <div className="flex flex-col bg-[#FFFAEA] ">
//         <Rider />
//         <Restaurant />
//       </div>
//       <HomeAccordion />
//       <Footer />
//     </div>
//   );
// }
import Hero from "./components/hero";
import Nav from "./components/nav";
import Why from "./components/why";
import Rider from "./components/rider";
import QuickSearch from "./components/quicksearch";
import Footer from "./components/footer";
import Restaurant from "./components/restaurant";
import HomeAccordion from "./components/HomeAccordion";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#FFFAEA] overflow-auto scrollbar scrollbar-thin scrollbar-thumb-[#1B3B31] scrollbar-track-[#f0f0f0]">
      <div className="flex flex-col w-full h-full">
        <Nav />
        <Hero />
      </div>
      <div className="my-15">
        <QuickSearch />
      </div>
      <Why />
      <div className="flex flex-col bg-[#FFFAEA]">
        <Rider />
        <Restaurant />
      </div>
      <Testimonials />
      <HomeAccordion />

      <Footer />
    </div>
  );
}
