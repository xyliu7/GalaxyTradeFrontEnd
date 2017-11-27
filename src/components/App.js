import React from 'react'
import SubmitParagraph from '../containers/InputParagraphContainer'
import OutputParagraph from '../containers/OutputResultContainer'


const App = () => (
	<div>
	    <header className="App-header">
	      <h1 className="App-title">GALAXY TRADE CALCULATOR</h1>
	    </header>
		<div>
			<SubmitParagraph />
			<OutputParagraph />
		</div>
	</div>
)

export default App