import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import Footer from './Footer'
import Navbar from './Navbar'
import { AppTypography } from '../utils/typography'
// import './all.sass'
import './reset.css'
import useSiteMetadata from './SiteMetadata'

const StyledMain = styled.main`
  min-height: 100vh;
  background-color: #333;
  ${AppTypography}
`

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#333" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <StyledMain>{children}</StyledMain>
    </div>
  )
}

export default TemplateWrapper
