import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<Box>
			<Navbar />
			<Box padding={[5, 10]}>{children}</Box>
		</Box>
	);
}
