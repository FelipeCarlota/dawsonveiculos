import './assets/style/main.css'
import './assets/style/all.css'
import './App.css'
import Header from './components/Header'
import Publicity from './components/Publicity'
import Emphasis from './components/Emphasis'
import AppSection from './components/AppSection'
import Testimony from './components/Testimony'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Header />
      <Publicity />
      <Emphasis />
      <AppSection />
      <Testimony />
      <Partners />
      <Footer />
    </main>
  )
}

export default App
