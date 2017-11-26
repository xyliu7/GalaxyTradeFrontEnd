import { connect } from 'react-redux'
import OutputResult from '../components/OutputResultComponent'

const processOutputResult = (outputParagraph) => {
	//console.log("processOutputResult_input(state): ", input)
	return outputParagraph.outputResult
}

//map state to output prop
const mapStateToProps = (state) => ({
  outputResult: processOutputResult(state.submitParagraph)
})

//connect container to output component
const OutputParagraph = connect(
  mapStateToProps
)(OutputResult)

export default OutputParagraph
