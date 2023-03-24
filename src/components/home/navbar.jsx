import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Search from "./search";

export default function Navbar() {
	return (
		<Flex
			px={8}
			py={5}
			borderBottom="2px"
			borderColor="gray.800"
			justifyContent="space-between"
			alignItems="center"
		>
			<Box>Logo</Box>
			<Search />
		</Flex>
	);
}
