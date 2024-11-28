import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import EducationDetails from './components/EducationDetails'
import Certifications from './components/Certifications'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
       <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
       <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        <Home />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Certifications />
        <EducationDetails />
        <ContactForm />
        <Footer />
        </div>
    </div>
  )
}

export default App
