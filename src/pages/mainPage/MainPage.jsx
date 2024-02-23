import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CountryItem } from "../../components/countryItem/CountryItem";
import { Form } from "../../components/form/Form";
import { urlContext } from "../../context/URLcontext";

export const MainPage = () => {
	const { url, setUrl } = useContext(urlContext);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				if (res.status === 200) {
					setCountries(res.data);
				}
			})
			.catch((err) => console.log(err));
	}, [url]);

	return (
		<section>
			<Form />
			<ul className="flex gap-[75px] flex-wrap mt-12 lg:justify-between max-[982px]:justify-center">
				{countries.map((item) => {
					return(
						<CountryItem key={item.cca2} item={item}/>
					)
				})}
			</ul>
		</section>
	);
};
