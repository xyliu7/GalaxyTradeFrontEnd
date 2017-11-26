import { httpPost }  from '../apis/httpClient'
import URL from '../apis/url'
import { checkStatusJson } from '../apis/restUtils'

export const submitParagraphRequest = (text) => ({
	type: 'SUBMIT_PARAGRAPH_REQUEST',
	text
})

export const submitParagraphSuccess = (isValid, outputResult) => ({
	type: 'SUBMIT_PARAGRAPH_SUCCESS',
	isValid,
	outputResult
})

export const submitParagraphFailed = (errorMsg) => ({
	type: 'SUBMIT_PARAGRAPH_FAILED',
	errorMsg
})

//3 kinds of action related to submit action
export function submitParagraph(text) {
	return (dispatch) => {
		dispatch(submitParagraphRequest(text))
		return httpPost(URL.PROCESS_PARAGRAPH, {paragraph: text})
			.then(checkStatusJson)
			.then((json) => {
				dispatch(submitParagraphSuccess(json.isValid, json.reason))
			})
			.catch((error) => {
				dispatch(submitParagraphFailed(`HTTP ERROR ${error}`))
			})
	}
}
