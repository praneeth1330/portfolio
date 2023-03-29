import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "experience",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	return (
		<div className="flex justify-between px-8 items-center w-full h-15 text-white bg-black fixed  ">
			<div className="">
				<Link to="home" smooth duration={500} delay={200}>
					<h1 className="text-3xl font-sign py-1 ml-2 cursor-pointer  ">
						Praneeth
					</h1>
				</Link>
			</div>
			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
					>
						<Link to={link} smooth duration={500}>
							{link}
						</Link>
					</li>
				))}
			</ul>
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? (
					<i class="fa-solid fa-xmark fa-2x"></i>
				) : (
					<i class="fa-solid fa-bars fa-2x"></i>
				)}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-4xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
