const submitParagraph = (state = {isValid: true, outputResult: ''}, action) => {
	switch (action.type) {
		case 'SUBMIT_PARAGRAPH':
		// console.log("submitParagraph_action_reducer")
		// console.log("state: ", state)
		return {
				isValid: true,
				outputResult: action.text
			}
		default:
		return state
	}
}

export default submitParagraph