import AboutUs from "@/components/homepage/AboutUs";
import Contact from "@/components/homepage/Contact";
import Hero from "@/components/homepage/Hero";
import Important from "@/components/homepage/Important";
import PhotoShowcase from "@/components/homepage/PhotoShowcase";
import PointsOfInterest from "@/components/homepage/PointsOfInterest";

export default function Home() {
  return (
    <main>
      <Hero />
      <Important />
      <PointsOfInterest />
      <AboutUs />
      <Contact />
      <PhotoShowcase />
    </main>
  );
}
