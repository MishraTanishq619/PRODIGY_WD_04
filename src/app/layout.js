"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Tanishq Mishra",
// 	description: "Made using Next 14",
// };

export default function RootLayout({ children }) {
	useEffect(() => {
		AOS.init({
			duration: 400,
			once: false,
		});
	}, []);
	return (
		<html lang="en">
			<body className="bg-orange-300 overflow-hidden">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
