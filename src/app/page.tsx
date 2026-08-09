import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Directions from "@/components/Directions";
import Tests from "@/components/Tests";
import Steps from "@/components/Steps";
import Reviews from "@/components/Reviews";
import Offices from "@/components/Offices";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 relative z-10">
        <Hero />
        <Directions />
        <Tests />
        <Steps />
        <Reviews />
        <Offices />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
