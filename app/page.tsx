import Features from "./components/features/page";
import Hero from "./components/hero/page";
import Nav from "./components/navigation/page";
import Services from "./components/services/page";
import WhyRemin from "./components/why-remin/why-remin";
import ContactUs from "./components/contactus/page";
import Finally from "./components/finally/page";


export default function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <WhyRemin/>
    <Features/>
    <Finally/>
    <Services/>
    <ContactUs/>
    </>
  )
}