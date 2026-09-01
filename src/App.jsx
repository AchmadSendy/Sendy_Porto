import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechLogos from './components/TechLogos'
import About from './components/About'
import WhyHireMe from './components/WhyHireMe'
import Skills from './components/Skills'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Blog from './components/Blog'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechLogos />
        <About />
        <WhyHireMe />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Blog />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
