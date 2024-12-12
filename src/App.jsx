import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Events from "./components/Events";
import TheStoryOfCoffee from "./components/TheStoryOfCoffee";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <>
      <main className="overflow-x-hidden antialiased text-neutral-800">
        <Navbar />
        <Hero />
        <Blog />
        <Events />
        <TheStoryOfCoffee />
        <Reviews />
        <ContactUs />
      </main>
    </>
  );
}
