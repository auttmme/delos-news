import React, { useEffect, useState } from "react";
import { Text, Card, Button } from "@chakra-ui/react";

export default function BuyArticleCard({ published }) {
	const [articlePrice, setArticlePrice] = useState("");

	const getArticlePrice = () => {
		const moreThanSevenDays = "0";
		const sevenDays = "20.000";
		const oneDay = "50.000";

		const publicationDate = new Date(published);
		const currentDate = new Date();

		const timeDiff = Math.abs(
			currentDate.getTime() - publicationDate.getTime()
		);
		const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

		let price;

		if (diffDays <= 7) {
			price = sevenDays;
		} else if (diffDays <= 1) {
			price = oneDay;
		} else {
			price = moreThanSevenDays;
		}

		console.log(price);
		return setArticlePrice(price);
	};

	useEffect(() => {
		getArticlePrice();
	}, []);

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
				{articlePrice} coins
			</Text>
			<Button colorScheme={"facebook"}>Buy Now</Button>
		</Card>
	);
}
