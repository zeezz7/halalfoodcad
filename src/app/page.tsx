import Hero from "./components/hero";
import Nav from "./components/nav";
import Why from "./components/why";
import Rider from "./components/rider";
import Footer from "./components/footer";
import Restaurant from "./components/restaurant";

export default function Home() {
  return (
    <main className="bg-[#FFFAEA] min-h-screen w-full overflow-x-hidden scrollbar scrollbar-thin scrollbar-thumb-[#1B3B31] scrollbar-track-[#f0f0f0]">
      <div className="flex flex-col w-full min-h-screen md:h-screen">
        <Nav />
        <Hero />
      </div>
      <section className="w-full py-8 sm:py-12 md:py-16">
        <Why />
      </section>
      <div className="flex flex-col bg-[#FFFAEA] space-y-8 sm:space-y-12 md:space-y-16 py-8 sm:py-12 md:py-16">
        <Rider />
        <Restaurant />
      </div>
      <Footer />
    </main>
  );
}
