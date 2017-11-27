import React from 'react'
import PropTypes from 'prop-types'


const OutputResult = ({ outputResult }) => (
	<textarea  rows='11' cols='100' readong='readonly' value={outputResult}>
		{outputResult}
	</textarea>
)

//output is an array
OutputResult.propTypes = {
  	outputResult: PropTypes.string.isRequired
}

export default OutputResult