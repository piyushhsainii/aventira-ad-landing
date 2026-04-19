import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Differ from './components/Differ'
import Services from './components/Services'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Guarantee from './components/Guarantee'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Differ />
        <Services />
        <Results />
        <Testimonials />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
