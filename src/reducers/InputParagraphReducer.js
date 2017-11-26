const submitParagraph = (state = {isValid: true, outputResult: '', isLoading: false}, action) => {
	switch (action.type) {
		case 'SUBMIT_PARAGRAH_REQUEST':
			console.log("submitParagraph_action_reducer")
			console.log("state before reducer: ", state)
			console.log("action.text: ", action.text)
			return {
				isValid: false,
				outputResult: '',
				isLoading: true
			}
		case 'SUBMIT_PARAGRAPH_SUCCESS':
			console.log("submitParagraph_action_reducer")
			console.log("state: ", state)
			console.log("outputResult:", action.outputResult)
			return {
				isValid: action.isValid,
				outputResult: action.outputResult,
				isLoading: false
			}
		case 'SUBMIT_PARAGRAPH_FAILED':
			return {
				isValid: false,
				outputResult: action.errorMsg,
				isLoading: false
			}
		default:
		return state
	}
}

export default submitParagraph