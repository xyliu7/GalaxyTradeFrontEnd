import React from 'react'
import PropTypes from 'prop-types'
import Textarea from 'muicss/lib/react/textarea'

const Paragraph = ({onClick, completed, text}) => (
	<Textarea placeholder="Please input here" onClick={onClick}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}>
		{text}
	</Textarea >
)

//define input props
Paragraph.propTypes = {
  	text: PropTypes.string.isRequired
}

export default Paragraph