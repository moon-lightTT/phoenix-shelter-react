import Layout from "../components/Layout";
import Hero from "../components/Hero";
import DogCarousel from "../components/DogCarousel";
import Donate from "../components/Donate";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <DogCarousel />
      <Donate />
      <Footer />
    </Layout>
  );
}