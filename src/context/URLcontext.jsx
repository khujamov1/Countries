import React, { createContext, useState } from "react";

export const urlContext = createContext();

export const URLcontext = ({ children }) => {
	const [url, setUrl] = useState("https://restcountries.com/v3.1/all");

	return (
		<urlContext.Provider value={{ url, setUrl }}>
			{children}
		</urlContext.Provider>
	);
};
