import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { modeContext } from "./context/ModeContext";
import { MainPage } from "./pages/mainPage/MainPage";
import { SinglePage } from "./pages/singlePage/SinglePage";

function App() {
	const{mode, setMode} = useContext(modeContext)
	return (
		<>
			<Header />
			<main className={"min-h-[657px] py-12  " + (mode ? "bg-[#202C36]" : "bg-[#FAFAFA]")}>
				<div className="max-w-[1400px] mx-auto px-5 pt-12">
					<Routes>
						<Route path="/" element={<MainPage/>}/>
						<Route path="/singlePage/*" element={<SinglePage/>}/>
					</Routes>
				</div>
			</main>
		</>
	);
}

export default App;
