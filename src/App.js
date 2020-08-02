import React from 'react';
import Routes from "./routes/Routes";
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
	
	render() {
		return (
			<BrowserRouter>				
				<Routes></Routes>
			</BrowserRouter>
		);
	}
}

export default App;
