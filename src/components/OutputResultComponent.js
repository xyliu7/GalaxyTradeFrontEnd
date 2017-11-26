import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from './InputParagraphComponent'
import Textarea from 'muicss/lib/react/textarea';

const OutputResult = ({ outputResult }) => (
	<output placeholder="Result will be here" value={outputResult}>
		{outputResult}
	</output>
)

OutputResult.propTypes = {
	//output should be a json!!!!!
  	outputResult: PropTypes.string.isRequired
}

export default OutputResult