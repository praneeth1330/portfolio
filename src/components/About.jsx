import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>
				<p className="text-xl mt-20">
					Hello, my name is <span className="text-2xl">Praneeth</span>, and I'm
					a frontend developer with knowledge in building responsive and
					intuitive user interfaces. I specialize in HTML, CSS, JavaScript, and
					have good knowledge with frontend library such as React.{" "}
				</p>
				<br />
				<p className="text-xl">
					My passion for frontend development stems from my desire to create
					engaging and impactful user experiences that are both functional and
					visually appealing. I believe that the key to a successful frontend is
					to balance usability and aesthetics to ensure that the user's journey
					is as seamless and enjoyable as possible.
				</p>{" "}
				<br />
				<p className="text-xl">
					In my spare time, I enjoy exploring new technologies and staying
					up-to-date with the latest trends and best practices in frontend
					development. I'm always looking for new challenges and opportunities
					to expand my skills and collaborate with like-minded individuals.
				</p>
				<br />
				<p className="text-xl">
					Thank you for taking the time to review my portfolio, and I look
					forward to discussing how I can contribute to your next frontend
					project.
				</p>
			</div>
		</div>
	);
};

export default About;
