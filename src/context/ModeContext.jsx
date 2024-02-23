import { useState, createContext } from "react";

export const modeContext = createContext();

export const ModeContext = ({ children }) => {
	const [mode, setMode] = useState(true);

	return (<modeContext.Provider value={{ mode, setMode }}>
		{children}
	</modeContext.Provider>)
};
