import Certifications from "@/Components/Certifications";
import Skills from "@/Components/Skills";
import React from "react";

const page = () => {
	return (
		<div className="flex overflow-hidden">
			<div data-aos="fade-right" className="pl-40 pt-20 h-[90vh] w-1/2 ">
				<p className=" text-[4rem] font-bold">Skills :</p>
				<Skills />
				<br />
				<br />
			</div>
			<div data-aos="fade-left" className="pl-40 pt-20 h-[90vh] w-1/2 ">
				<p className=" text-[4rem] font-bold">Certifications</p>
				<Certifications />
				<br />
			</div>
		</div>
	);
};

export default page;
