import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainter from "./HogContainer";

function App() {

	//const [hogList, setHogList] = useState(hogs)

	return (
		
		<div className="App">
			<Nav />
			<HogContainter hogDataProp = {hogs}/>
		</div>
	);
}

export default App;
