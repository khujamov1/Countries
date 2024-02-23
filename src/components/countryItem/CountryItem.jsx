import { useContext } from "react";
import { Link } from "react-router-dom";
import { modeContext } from "../../context/ModeContext";

export const CountryItem = ({ item }) => {

	const{mode, setMode} = useContext(modeContext);

	return (
		<li className={"rounded-md shadow-lg w-[264px] pb-11 hover:opacity-70 " + (mode ? "bg-[#2B3844] text-white" : "bg-white text-black")}>
			<Link to={`/singlePage/${item.cca2}`}>
				<img
					src={item.flags.svg}
					alt={item.flags.alt}
					width={264}
					height={160}
					className="object-cover w-[264px] h-[160px] mb-6"
				/>
				<h3 className="font-bold text-xl mb-4 ml-6">{item.name.common}</h3>
				<ul className="flex flex-col gap-2 pl-6">
					<li className="text-sm">
						<strong>Population: </strong>
						{item.population}
					</li>
					<li className="text-sm">
						<strong>Region: </strong>
						{item.region}
					</li>
					<li className="text-sm">
						<strong>Capital: </strong>
						{item.capital}
					</li>
				</ul>
			</Link>
		</li>
	);
};
