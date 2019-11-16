import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import moment from 'moment'
import ContentSection from './ContentSection'
import Img from './Img'
import { H2 } from '../utils/typography'
import breakpoints from '../utils/breakpoints'

const StyledShow = styled.li`
  /* flex: 0 1 400px; */
  padding: 0px 25px 25px;

  p:first-child {
    /* float: left; */
    font-weight: 600;
    margin-bottom: 0.5em;

    span {
      float: right;
      font-weight: 300;
    }
  }
  p:nth-child(2) {
    float: right;
  }
`

export const Show = ({ show }) => (
  <StyledShow>
    <p>
      {show.venue}
      <span>{moment(show.date).format('MMM D')}</span>
    </p>
    <Img
      // fluid={show.poster.childImageSharp.fluid}
      src={show.poster.publicURL}
      width="auto"
      // height={window.innerWidth > breakpoints.mobileNum ? '400px' : 'auto'}
      height="400px"
    />
  </StyledShow>
)

Show.propTypes = {
  show: PropTypes.shape({
    venue: PropTypes.string,
    date: PropTypes.string,
    poster: PropTypes.string,
  }).isRequired,
}

const ShowList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const PastShows = () => {
  const data = useStaticQuery(graphql`
    query PastShowsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fields: { slug: { regex: "//shows//" } } }
      ) {
        edges {
          node {
            frontmatter {
              date
              venue
              poster {
                publicURL
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ContentSection>
      <H2>Past Shows</H2>
      <ShowList>
        {data.allMarkdownRemark.edges
          .filter(edge =>
            moment(edge.node.frontmatter.date).isBefore(
              moment().subtract(1, 'day')
            )
          )
          .map(({ node: { frontmatter } }) => (
            <Show show={frontmatter} key={frontmatter.date} />
          ))}
      </ShowList>
    </ContentSection>
  )
}

export default PastShows
