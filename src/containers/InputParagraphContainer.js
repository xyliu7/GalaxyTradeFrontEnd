import React from 'react'
import {connect} from 'react-redux'
import {submitParagraph} from '../actions/InputParagraphAction'

let SubmitParagraph = ({dispatch}) => {
	let inputParagraph

	return (
		<div>
			<form onSubmit = {e=> {
									 e.preventDefault()
									 if(!inputParagraph.value.trim()) {
										return
									 }
									 dispatch(submitParagraph(inputParagraph.value))}}>

				<textarea rows='16' cols='100' placeholder="Please input here" ref={node => {inputParagraph = node}}/>
				<br/>
				<button type="submit"> Trade Calulation </button>
				<br/>
				<br/>
			</form>
		</div>
	)
}

//input doesn't have any state, no related map function
SubmitParagraph = connect()(SubmitParagraph)

export default SubmitParagraph