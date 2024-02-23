import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { modeContext } from "../../context/ModeContext";

export const Header = () => {
	const { mode, setMode } = useContext(modeContext);

	return (
		<header
			className={
				"shadow-xl relative z-10 " +
				(mode ? "bg-[#2B3844] text-white " : "bg-[#FFF] text-black")
			}
		>
			<div className="max-w-[1400px] mx-auto px-5">
				<div className="flex py-6 justify-between">
					<Link
						to="/"
						className="font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl"
					>
						Where in the world?
					</Link>
					<button
						onClick={() => {
							setMode(!mode);
						}}
						className="flex items-center gap-2"
					>
						{mode ? (
							<>
								<MdLightMode />
								Light mode
							</>
						) : (
							<>
								<MdDarkMode />
								Dark mode
							</>
						)}
					</button>
				</div>
			</div>
		</header>
	);
};
