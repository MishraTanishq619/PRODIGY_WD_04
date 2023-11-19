import React from "react";

const Navbar = () => {
	return (
		<div
			data-aos="flip-down"
			data-aos-duration="2000"
			data-aos-delay="300"
			data-aos-once="true"
			className="flex text-black justify-center  items-center h-[60px] w-full bg-red-500 gap3"
		>
			<a href="/">
				<p>Home</p>
			</a>
			<a href="/Work">
				<p>Work</p>
			</a>
			<a href="/About">
				<p>About</p>
			</a>
			<a href="/Projects">
				<p>Projects</p>
			</a>
		</div>
	);
};

export default Navbar;
