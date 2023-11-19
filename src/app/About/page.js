import Certifications from "@/Components/Certifications";
import Skills from "@/Components/Skills";
import React from "react";

const page = () => {
	return (
		<div className="flex">
			<div
				data-aos="fade-right"
				className="px-5 h-[90vh] w-1/2 bg-green-500"
			>
				<p className=" text-[4rem] font-bold">Skills :</p>
				<Skills />
				<br />
				<p>Education</p>
				<br />
			</div>
			<div
				data-aos="fade-left"
				className="pl-8 h-[90vh] w-1/2 bg-blue-800"
			>
				<p className=" text-[4rem] font-bold">Certifications</p>
				<Certifications />
				<br />
			</div>
		</div>
	);
};

export default page;
