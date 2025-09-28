
import AiSection from './components/AiSection'
import BotSection from './components/BotSection'
import CtaSection from './components/CtaSection'
import DataSection from './components/DataSection'
import EditSection from './components/EditSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <div className='w-auto overflow-x-hidden'>
      <Header />
      <HeroSection />
      <DataSection />
      <AiSection />
      <EditSection />
      <FaqSection />
      <BotSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
