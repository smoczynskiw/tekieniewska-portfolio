import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ContentBox from './components/ContentBox/ContentBox'
import Footer from './components/Footer/Footer'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'

function App() {

  const links = ['portfolio', 'kontakt', 'pl/eng']
  const socials = [faFacebookF, faInstagram]
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div style={{ backgroundColor: "#1c1c1c", width: "100vw", height: "100vh" }}>
      <Navbar links={links} socials={socials} />
      <div style={{ width: '100%', height: '70vh', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map(box => <ContentBox />)}
      </div>
      <Footer />
    </div>
  )
}

export default App
