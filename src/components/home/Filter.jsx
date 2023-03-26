import React from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Select,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Filter() {
	return (
		<Select placeholder="All" width={["45%", "10%"]}>
			<option>Most Emailed</option>
			<option>Most Shared</option>
			<option>Most Viewed</option>
		</Select>
	);
}
