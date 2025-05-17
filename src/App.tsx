
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills' 
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'

function App() {


  return (
    <>
  <div className='bg-[#090e16]'>
    <div className='absolute w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] animate-[pulse_6s_ease-in-out_infinite]'></div>
    <div className='relative pt-20'>
      <Navbar/>
      <About/>
      <Skills/>
      {/* <Experience/> */}
      {/* <Work/> */}
      <Education/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  </div>
    </>
  ) 
}

export default App
