import React from "react";

import css from "../assets/css.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
	const Experiences = [
		{
			id: 1,
			src: html,
			site: "Html",
			styles: "shadow shadow-orange-500",
		},
		{
			id: 2,
			src: css,
			site: "Css",
			styles: "shadow shadow-blue-500",
		},
		{
			id: 3,
			src: javascript,
			site: "JavaScript",
			styles: "shadow shadow-yellow-500",
		},
		{
			id: 4,
			src: react,
			site: "React",
			styles: "shadow shadow-[#61dbfb]",
		},
		{
			id: 5,
			src: tailwind,
			site: "Tailwind",
			styles: "shadow shadow-green-200",
		},
		{
			id: 6,
			src: github,
			site: "Github",
			styles: "shadow shadow-white",
		},
	];
	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-gray-800 to-black w-full  md:h-screen"
		>
			<div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full text-white">
				<div className="">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
						Experience.jsx
					</p>
					<p className="py-6">here are the skills i have</p>
				</div>
				<div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0">
					{Experiences.map(({ id, src, site, styles }) => (
						<div
							key={id}
							className={
								" flex flex-col justify-center items-center rounded-md shadow-md hover:scale-105 duration-300" +
								" " +
								styles
							}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<h1 className="py-2">{site}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
