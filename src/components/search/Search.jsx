import React, { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function Search() {
	const router = useRouter();

	const [searchQuery, setSearchQuery] = useState("");

	const searchTyped = (e) => {
		setSearchQuery(e.target.value);
	};

	const enterPressed = (e) => {
		if (e.key === "Enter" && searchQuery !== "") {
			router.push({
				pathname: "/search",
				query: { query: JSON.stringify(searchQuery) },
			});
		}
	};

	return (
		<InputGroup width={{ base: "90%", lg: "sm" }}>
			<InputLeftElement children={<SearchIcon color="gray.800" />} />
			<Input
				type="text"
				placeholder="search"
				borderColor="gray.800"
				borderRadius="2xl"
				value={searchQuery}
				onChange={searchTyped}
				onKeyPress={enterPressed}
			/>
		</InputGroup>
	);
}
