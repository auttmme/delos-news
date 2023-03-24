import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Filter() {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				All
			</MenuButton>
			<MenuList>
				<MenuItem>Most Emailed</MenuItem>
				<MenuItem>Most Shared</MenuItem>
				<MenuItem>Most Viewed</MenuItem>
			</MenuList>
		</Menu>
	);
}
