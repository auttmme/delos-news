import React, { useCallback, useEffect, useState } from "react";
import { Text, Card, Button } from "@chakra-ui/react";

export default function BuyArticleCard({ url, published }) {
	const [articlePrice, setArticlePrice] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);

	const getArticlePrice = useCallback(() => {
		const moreThanSevenDays = "0";
		const sevenDays = "20000";
		const oneDay = "50000";

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
	}, [published]);

	const buyArticle = () => {
		let currency = parseInt(localStorage.getItem("currency"));
		let articles = JSON.parse(localStorage.getItem("articles"));

		if (currency < articlePrice) {
			alert("saldo tidak cukup");
			return;
		}
		if (currency >= articlePrice) {
			currency = currency - articlePrice;
			localStorage.setItem("currency", currency.toString());
			if (articlePrice === "0") {
				let count = 0;
				articles.forEach((a) => {
					if (a.price === "0") {
						count += 1;
					}
				});
				if (count === 5) {
					alert("reached maximum free articles");
					return;
				}
			}
			if (articlePrice === "50000") {
				localStorage.setItem("ticket", "3");
				alert("you get 3 lucky draw tickets, please see on lucky draw page");
			}
			articles = [...articles, { url, price: articlePrice }];
			localStorage.setItem("articles", JSON.stringify(articles));
			setIsDisabled(true);
		}
	};

	useEffect(() => {
		getArticlePrice();
		let articles = JSON.parse(localStorage.getItem("articles"));

		if (articles.find((e) => e.url === url)) {
			console.log("disable");
			setIsDisabled(true);
		}
	}, [getArticlePrice, url]);

	return (
		<Card
			border={"2px"}
			borderRadius="xl"
			borderColor="gray.400"
			padding="4"
			width={["full", "full", "full", "25%"]}
			height="fit-content"
			marginTop={["10", 0, 0, "20"]}
		>
			<Text fontSize={"xl"} align="center">
				Buy this article to get full access
			</Text>
			<Text align={"center"} fontSize="2xl" fontWeight={"semibold"} my={5}>
				{articlePrice} coins
			</Text>
			<Button
				colorScheme={"facebook"}
				onClick={buyArticle}
				isDisabled={isDisabled}
			>
				Buy Now
			</Button>
		</Card>
	);
}
