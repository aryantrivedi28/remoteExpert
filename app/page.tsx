import Header from './components/Header'
import Hero from './components/Hero'
import Openings from './components/Openings'
import Offers from './components/Offers'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import WhyJoin from './components/WhyJoin'
import Companies from './components/Companies'
import ApplicationForm from './components/ApplicationForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Openings />
        <Offers />
        <Categories />
        <HowItWorks />
        <WhyJoin />
        <Companies />
        <ApplicationForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}