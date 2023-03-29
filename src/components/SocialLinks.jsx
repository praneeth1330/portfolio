import React from "react";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					Linkedin<i class="fa-brands fa-linkedin fa-2x"></i>
				</>
			),
			href: "https://in.linkedin.com",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					Github<i class="fa-brands fa-github fa-2x"></i>
				</>
			),
			href: "https://github.com",
		},
		{
			id: 3,
			child: (
				<>
					Mail<i class="fa-regular fa-envelope fa-2x"></i>
				</>
			),
			href: "https://mail.google.com/",
		},
		{
			id: 4,
			child: (
				<>
					Profile<i class="fa-regular fa-address-card fa-2x"></i>
				</>
			),
			href: "https://in.linkedin.com",
			style: "rounded-br-md",
			download: true,
		},
	];

	return (
		<div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={
							" flex justify-center items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500 " +
							" " +
							style
						}
					>
						{" "}
						<a
							href={href}
							className="flex justify-between items-center w-full text-white"
							download={download}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
