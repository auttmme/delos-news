import Layout from "@/components/common/Layout";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function LuckyDraw() {
	const [ticket, setTicket] = useState(0);
	const [prize, setPrize] = useState("");

	const getTicket = () => {
		let ticket = parseInt(localStorage.getItem("ticket"));
		setTicket(ticket);
	};

	const randomPrize = () => {
		let ticket = parseInt(localStorage.getItem("ticket"));
		let currency = parseInt(localStorage.getItem("currency"));

		if (ticket < 1) {
			alert("you have no ticket");
			return;
		}
		if (ticket > 0) {
			const randomNumber = Math.random();
			if (randomNumber < 0.1) {
				setPrize("50.000 coins");
				currency = currency + 50000;
				localStorage.setItem("currency", currency.toString());
			} else if (randomNumber < 0.3) {
				setPrize("20.000 coins");
				currency = currency + 20000;
				localStorage.setItem("currency", currency.toString());
			} else {
				setPrize("Try Again");
			}

			ticket = ticket - 1;
			console.log("sisa", ticket);
			setTicket(ticket);
			localStorage.setItem("ticket", ticket.toString());
		}
	};

	useEffect(() => {
		getTicket();
		console.log("state ticket", ticket);
	}, [ticket]);

	console.log("ticket", { ticket });

	return (
		<Layout>
			<Flex justifyContent={"center"} alignItems="center" flexDir="column">
				<Text
					fontSize={"2xl"}
					textAlign="center"
					fontWeight="bold"
					color="facebook.800"
				>
					Lucky Draw
				</Text>
				<Text marginTop={5}>Your ticket: {ticket}</Text>
				<Button
					width={["full", "40%"]}
					py={8}
					my={5}
					colorScheme="facebook"
					onClick={randomPrize}
				>
					Get Prize!
				</Button>
				<Text>{prize}</Text>
			</Flex>
		</Layout>
	);
}
