import { connect } from 'react-redux'
import OutputResult from '../components/OutputResultComponent'

const processOutputResult = (input) => {
	//console.log("processOutputResult_input(state): ", input)
	return input.outputResult
}

//map state to output prop
const mapStateToProps = (state) => ({
  outputResult: processOutputResult(state.submitParagraph)
})

//connect container to output component
const outputParagraph = connect(
  mapStateToProps
)(OutputResult)

export default outputParagraph
