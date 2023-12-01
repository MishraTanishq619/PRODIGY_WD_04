import React from "react";

const page = () => {
	return (
		<div className="p-4 h-[93vh] bg-orange-300 w-full overflow-hidden">
			<h1 className="text-7xl font-bold mx-[34%] mb-10">
				Know Me Better
			</h1>
			<div className="flex h-[70vh] w-[100%]">
				<div
					data-aos="fade-right"
					className="h-[70%] w-[50%] flex flex-col text-4xl items-center justify-around"
				>
					<h2>
						<a href="#">
							Mail Me :
							<b className="text-blue-700">
								mishratanishq619@gmail.com
							</b>
						</a>
					</h2>
					<h2>
						<a href="https://www.linkedin.com/in/tanishq-mishra-495541255/">
							Connect With Me :
							<b className="text-blue-700">LinkedIn Profile</b>
						</a>
					</h2>
					<h2>
						<a href="https://github.com/MishraTanishq619">
							See My Contributions :
							<b className="text-blue-700">Github Profile</b>
						</a>
					</h2>
				</div>
				<div data-aos="fade-left" className="flex h-[70vh] w-[50%]">
					<img
						src="/assets/shiva.jpg"
						alt="ShivaImage"
						className="rounded-full h-[70%] ml-20 mt-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
