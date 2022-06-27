import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div id="navbar"></div>
			<Routes id="page">
				{/* <Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</div>
	);
}

export default App;

