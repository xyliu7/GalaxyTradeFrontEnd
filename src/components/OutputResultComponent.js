import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from './InputParagraphComponent'

const OutputResult = ({ outputResult }) => (
	<output placeholder="Result will be here" value={outputResult}>
		{outputResult}
	</output>
)

//output is an array
OutputResult.propTypes = {
  	outputResult: PropTypes.string.isRequired
}


export default OutputResult