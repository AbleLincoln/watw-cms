import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { AppTypography } from '../utils/typography'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Video from '../components/Video'
import UpcomingShows from '../components/UpcomingShows'
import PastShows from '../components/PastShows'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function App() {
  return (
    <Layout>
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
    </Layout>
  )
}

export default App
