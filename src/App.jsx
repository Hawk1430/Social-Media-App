import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Items from "./pages/Items";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/item/:id" element={<Items />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
