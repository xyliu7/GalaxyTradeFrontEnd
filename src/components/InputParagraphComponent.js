import React from 'react'
import PropTypes from 'prop-types'
import Textarea from 'muicss/lib/react/textarea'

const Paragraph = ({onClick, completed, text}) => (
	<Textarea >
		{text}
	</Textarea >
)

//define input props
Paragraph.propTypes = {
  	text: PropTypes.string.isRequired
}

export default Paragraph