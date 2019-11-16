import React from 'react'
import PropTypes from 'prop-types'
import { Show } from '../../components/PastShows'

const ShowPreview = ({ entry, getAsset }) => (
  <Show
    show={{
      date: entry.getIn(['data', 'date']),
      venue: entry.getIn(['data', 'venue']),
      poster: getAsset(entry.getIn(['data', 'poster'])),
    }}
  />
)

ShowPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ShowPreview
