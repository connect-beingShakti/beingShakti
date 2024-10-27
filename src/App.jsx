import './App.css'
import Home from './pages/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Mission from './pages/mission/Mission'
import Services from './pages/services/Services'
import Reviews from './pages/reviews/Reviews'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Mission/>
      <Services/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
