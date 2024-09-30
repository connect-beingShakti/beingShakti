import './App.css'
import Home from './pages/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
