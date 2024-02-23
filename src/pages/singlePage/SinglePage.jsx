import { Link, useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { modeContext } from "../../context/ModeContext";

export const SinglePage = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [country, setCountry] = useState([]);
	const { mode, setMode } = useContext(modeContext);

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/alpha/${params["*"]}`)
			.then((res) => {
				if (res.status === 200) {
					setCountry(res.data);
				}
			})
			.catch((err) => console.log(err));
	}, [params]);

	// console.log();

	return (
		<section>
			<button
				className={
					"flex items-center gap-2 pr-8 pl-6 py-[10px] rounded-lg mb-[80px] " +
					(mode
						? "bg-[#2B3844] text-white"
						: "bg-white text-black shadow-lg")
				}
				onClick={() => {
					navigate(-1);
				}}
			>
				<GoArrowLeft />
				Back
			</button>

			{country.length ? (
				<div className="lg:flex gap-36">
					<img
						src={country[0].flags.svg}
						alt={country[0].flags.alt}
						width={560}
						height={400}
						className="w-[560px] h-[400px] object-cover rounded-xl"
					/>
					<div className={mode ? "text-white" : "text-black"}>
						<h2 className="text-3xl font-bold mb-[23px]">
							{country[0].name.common}
						</h2>
						<ul className="inline-flex flex-col mr-16 gap-3 mb-16">
							<li>
								<strong>Native Name: </strong>
								{
									country[0]?.name.nativeName[
										Object.keys(
											country[0]?.name.nativeName
										)[0]
									].common
								}
							</li>
							<li>
								<strong>Population: </strong>
								{country[0]?.population}
							</li>
							<li>
								<strong>Region: </strong>
								{country[0]?.region}
							</li>
							<li>
								<strong>Sub Region: </strong>
								{country[0]?.subregion}
							</li>
							<li>
								<strong>Capital: </strong>
								{country[0]?.capital}
							</li>
						</ul>
						<ul className="inline-flex flex-col gap-3 mb-5">
							<li>
								<strong>Top Level Domain: </strong>
								{country[0]?.tld}
							</li>
							<li>
								<strong>Currencies: </strong>
								{
									country[0].currencies[
										Object.keys(country[0].currencies)[0]
									].name
								}
							</li>
							<li>
								<strong>Region: </strong>
								{country[0]?.region}
							</li>
							<li>
								<strong>Sub Region: </strong>
								{country[0]?.subregion}
							</li>
						</ul>
						<div>
							<strong>Border Countries:</strong>
							{country[0].borders.map((item) => {
								return (
									<Link
										key={item}
										to={`/singlepage/${item}`}
										className={"mx-2 px-6 py-2 rounded-lg " + (mode ? "bg-[#2B3844]" : "bg-stone-200")}
									>
										{item}
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</section>
	);
};
