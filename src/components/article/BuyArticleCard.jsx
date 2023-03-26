import React from "react";
import { Text, Card, Button } from "@chakra-ui/react";

export default function BuyArticleCard() {
	return (
		<Card
			border={"2px"}
			borderRadius="xl"
			borderColor="gray.400"
			padding="4"
			width={["full", "full", "full", "25%"]}
			height="fit-content"
			marginTop={[0, 0, 0, "20"]}
		>
			<Text fontSize={"xl"} align="center">
				Buy this article to get full access
			</Text>
			<Text align={"center"} fontSize="2xl" fontWeight={"semibold"} my={5}>
				20.000 coins
			</Text>
			<Button colorScheme={"facebook"}>Buy Now</Button>
		</Card>
	);
}
