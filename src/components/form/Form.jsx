import { useContext } from "react";
import { selectOptions } from "../../constants/select";
import { modeContext } from "../../context/ModeContext";
import { urlContext } from "../../context/URLcontext";

export const Form = () => {
	const { url, setUrl } = useContext(urlContext);
	const { mode, setMode } = useContext(modeContext);

	const handleSelect = (evt) => {
		console.log(evt.target.value);
		evt.target.value
			? setUrl(
					`https://restcountries.com/v3.1/region/${evt.target.value}`
			  )
			: setUrl(`https://restcountries.com/v3.1/all`);
	};
	const handleInput = (evt) => {
		evt.target.value
			? setUrl(`https://restcountries.com/v3.1/name/${evt.target.value}`)
			: setUrl(`https://restcountries.com/v3.1/all`);
	};

	return (
		<form className="flex justify-between items-center">
			<input
				type="text"
				className={
					"md:py-[18px] py-[15px] lg:w-[480px] md:w-[390px] sm:w-[290px] w-[150px] lg:px-16 md:px-10 px-4 rounded-md  focus:outline-slate-200 " +
					(mode
						? "bg-[#2B3844] text-white placeholder:text-white"
						: "shadow-lg")
				}
				placeholder="Search for a country…"
				onChange={handleInput}
			/>
			<select
				className={
					"md:py-[18px] py-[15px] md:pl-6 md:pr-[70px] max-md:px-2 text-sm rounded-md focus:outline-slate-700 " +
					(mode
						? "bg-[#2B3844] text-white placeholder:text-white"
						: "shadow-lg")
				}
				onChange={handleSelect}
			>
				<option hidden>Filter by Region</option>
				{selectOptions.map((item) => {
					return (
						<option key={item.id} value={item.value}>
							{item.name}
						</option>
					);
				})}
			</select>
		</form>
	);
};
