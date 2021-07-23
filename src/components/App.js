import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainter from "./HogContainer";

function App() {
	return (
		
		<div className="App">
			<Nav />
			<HogContainter hogDataProp = {hogs}/>
		</div>
	);
}

export default App;
