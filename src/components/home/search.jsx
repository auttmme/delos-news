import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {
	return (
		<InputGroup maxW="sm">
			<InputLeftElement children={<SearchIcon color="gray.800" />} />
			<Input
				type="text"
				placeholder="search"
				borderColor="gray.800"
				borderRadius="2xl"
			/>
		</InputGroup>
	);
}
