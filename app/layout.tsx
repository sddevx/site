import { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "./lib/components/Header"
import Footer from "./lib/components/Footer"

export const metadata: Metadata = {
	title: "San Diego DEVx",
	description: "All things Software Development"
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
