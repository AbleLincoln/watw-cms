import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { AppTypography } from '../utils/typography'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Video from '../components/Video'
import UpcomingShows from '../components/UpcomingShows'
import PastShows from '../components/PastShows'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const StyledApp = styled.div`
  min-height: 100vh;
  background-color: #333;
  ${AppTypography}
`

function App() {
  return (
    <StyledApp>
      <Header />
      <Hero />
      <Bio />
      <Element name="show-section">
        <UpcomingShows />
        <PastShows />
      </Element>
      <Element name="video-section">
        <Video />
      </Element>

      <Element name="contact-section">
        <Contact />
      </Element>
      <Footer />
    </StyledApp>
  )
}

export default App
