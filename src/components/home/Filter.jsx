import React, { useState } from "react";
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
	const [checkedItems, setCheckedItems] = useState([true, true, true]);

	const allChecked = checkedItems.every(Boolean);
	const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

	const [category, setCategory] = useState([]);

	const sendCategory = () => {
		onCategory();
	};

	console.log("value", category);

	return (
		<Menu>
			<MenuButton marginBottom={5} as={Button} rightIcon={<ChevronDownIcon />}>
				Filter
			</MenuButton>
			<MenuList padding={4}>
				<CheckboxGroup colorScheme={"facebook"}>
					<Stack>
						<Checkbox
							defaultChecked
							isChecked={allChecked}
							value="all"
							isIndeterminate={isIndeterminate}
							onChange={(e) => {
								setCheckedItems([
									e.target.checked,
									e.target.checked,
									e.target.checked,
								]);
								setCategory(e.target.value);
							}}
						>
							All
						</Checkbox>
						<Checkbox
							isChecked={checkedItems[0]}
							onChange={(e) =>
								setCheckedItems([
									e.target.checked,
									checkedItems[1],
									checkedItems[2],
								])
							}
						>
							Most Viewed
						</Checkbox>
						<Checkbox
							isChecked={checkedItems[1]}
							onChange={(e) =>
								setCheckedItems([
									checkedItems[0],
									e.target.checked,
									checkedItems[2],
								])
							}
						>
							Most Shared
						</Checkbox>
						<Checkbox
							isChecked={checkedItems[2]}
							onChange={(e) =>
								setCheckedItems([
									checkedItems[0],
									checkedItems[1],
									e.target.checked,
								])
							}
						>
							Most Emailed
						</Checkbox>
					</Stack>
				</CheckboxGroup>
			</MenuList>
		</Menu>
	);
}
