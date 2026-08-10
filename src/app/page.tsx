import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Directions from "@/components/Directions";
import Tests from "@/components/Tests";
import Steps from "@/components/Steps";
import Reviews from "@/components/Reviews";
import Offices from "@/components/Offices";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 relative z-10">
        <Hero />
        <TrustStrip />
        <Reveal>
          <Directions />
        </Reveal>
        <Reveal>
          <Tests />
        </Reveal>
        <Reveal>
          <Steps />
        </Reveal>
        <Reveal>
          <Reviews />
        </Reveal>
        <Reveal>
          <Offices />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
