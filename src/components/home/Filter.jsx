import React, { useEffect, useState, useMemo } from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	Button,
	Stack,
	Checkbox,
	CheckboxGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Filter({ onCategory }) {
	const [category, setCategory] = useState([
		"all",
		"most viewed",
		"most shared",
		"most emailed",
	]);

	const isIndeterminate = useMemo(
		() => category.length > 0 && category.length < 4,
		[category]
	);

	useEffect(() => {
		console.log("category useef", category);
		onCategory(category);
	}, [category, onCategory]);

	const handleChange = (a) => {
		if (a.includes("all") && a.length === 1) {
			setCategory([]);
			return;
		}
		if (!a.includes("all") && a.length === 3) {
			setCategory(["all", "most viewed", "most shared", "most emailed"]);
			return;
		}
		setCategory(a);
	};

	const allChange = () => {
		if (category.includes("all")) {
			setCategory([]);
		} else {
			setCategory(["all", "most viewed", "most shared", "most emailed"]);
		}
	};

	return (
		<Menu>
			<MenuButton marginBottom={5} as={Button} rightIcon={<ChevronDownIcon />}>
				Filter
			</MenuButton>
			<MenuList padding={4}>
				<CheckboxGroup
					colorScheme={"facebook"}
					onChange={handleChange}
					value={category}
				>
					<Stack>
						<Checkbox
							value="all"
							isIndeterminate={isIndeterminate}
							onChange={allChange}
						>
							All
						</Checkbox>
						<Checkbox value="most viewed">Most Viewed</Checkbox>
						<Checkbox value="most shared">Most Shared</Checkbox>
						<Checkbox value="most emailed">Most Emailed</Checkbox>
					</Stack>
				</CheckboxGroup>
			</MenuList>
		</Menu>
	);
}
