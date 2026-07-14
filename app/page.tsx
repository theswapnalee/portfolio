import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";



export default function Home(){

return (

<main className="
text-neutral-900
min-h-screen
">


<Navbar />

<Hero />

<Experience />

<Projects />

<Skills />

<Contact />

<Footer />


</main>

);

}