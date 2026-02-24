"use client";

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Header/>
      <div className='bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200'>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default Home
