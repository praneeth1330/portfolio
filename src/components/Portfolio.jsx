import React from "react";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: p1,
			demo: "https://bejewelled-lamington-76b905.netlify.app/",
		},
		{
			id: 2,
			src: p2,
			demo: "https://maxic-praneeth.netlify.app/",
		},
		{
			id: 3,
			src: p3,
			demo: "https://hexa-property-1.netlify.app/",
		},
		{
			id: 4,
			src: p4,
			demo: "https://eclectic-unicorn-2ccd4a.netlify.app/",
		},
	];

	return (
		<div
			name="portfolio"
			className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:max-h-screen py-10"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-0 ">
				<div className="pb-5">
					<p className="text-4xl font-bold inline border-b-4">Portfolio</p>
					<p className="py-6 font-bold">Check out some of my wokr</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src, demo }) => (
						<div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
							<img
								src={src}
								alt=""
								className="rounded-md duration-200 hover:scale-105"
							/>
							<div className="flex items-center justify-center">
								<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
									<a href={demo} target="_blank">
										Demo
									</a>
								</button>

								<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
									{" "}
									Code
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
