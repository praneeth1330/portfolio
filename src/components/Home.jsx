import React from "react";
import Heroimg from "../assets/heroimage.png";
import { Link } from "react-scroll";

const home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800"
		>
			<div className=" max-w-screen-lg px-4 mx-auto flex flex-col items-center justify-center h-full md:flex-row">
				<div className=" flex flex-col justify-center h-full  ">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						i'm a Frontend Developer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I have 8 years of experience building and desgining software.
						Currently, I love to work on web application using technologies like
						React, Tailwind, Next JS and GraphQL.
					</p>
					<div className="">
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<i className="fa-solid fa-arrow-right px-2 self-center"></i>
							</span>
						</Link>
					</div>
				</div>
				<div className="pt-0">
					<img
						src={Heroimg}
						alt=""
						className="rounded-2xl mx-auto w-2/5 md:w-3/5 "
					/>
				</div>
			</div>
		</div>
	);
};

export default home;
