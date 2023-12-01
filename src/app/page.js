"use client";

import React, { useEffect } from "react";

const page = () => {
	return (
		<div className="flex overflow-hidden">
			<div
				data-aos="fade-right"
				className="p-20 h-[90vh] w-1/2  text-2xl"
			>
				<p>
					Hi, This is <b className="text-9xl">Tanishq Mishra</b> , a
					2nd Year UnderGrad , pursuing B.Tech in CSE. <br />I am
					interested in <b> FullStack Web Development</b> and learning
					them by myself. <br /> I hope to make my career as a
					<b>Remote Web Developer. </b> <br /> I am looking forward
					for GSOC , MLH fellowship ad other Hackathons and
					<b> Open Source Programs</b> in my interests.
					<br />
					<br />
				</p>
				<ul>
					<li>- an Aspiring Web Developer.</li>
					<li>- I have many Mini Projects.</li>
					<li>- Hall of Fames of Hacktoberfest2023.</li>
				</ul>
			</div>
			<div data-aos="fade-left" className="h-[90vh] w-1/2 ">
				<img
					src="/assets/linkedinpic.jpeg"
					alt="ShivaImage"
					className="rounded-full h-[70%] ml-20 mt-10"
				/>
			</div>
		</div>
	);
};

export default page;
