"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
	useEffect(() => {
		AOS.init({
			duration: 400,
			once: false,
		});
	}, []);
	return (
		<div className="flex">
			<div
				data-aos="fade-right"
				className="h-[90vh] w-1/2 bg-green-500"
			></div>
			<div
				data-aos="fade-left"
				className="h-[90vh] w-1/2 bg-blue-800"
			></div>
		</div>
	);
};

export default page;
