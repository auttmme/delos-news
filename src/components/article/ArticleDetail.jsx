import React from "react";
import {
	Heading,
	Box,
	Flex,
	Image,
	Text,
	Card,
	Button,
} from "@chakra-ui/react";
import Navbar from "../common/Navbar";
import BuyArticleCard from "./BuyArticleCard";

export default function ArticleDetail() {
	return (
		<Box width={["full", "full", "full", "65%"]}>
			<Heading fontSize={"4xl"} marginBottom="1">
				Title
			</Heading>
			<Flex marginBottom={"8"}>
				<Text color="gray.800">author name</Text>
				<Text mx="3" color={"gray.400"}>
					&#x2022;
				</Text>
				<Text color="gray.800">12 april 2021</Text>
			</Flex>
			<Image
				src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
				width="full"
				height={["50%", "500px"]}
				objectFit={"cover"}
			/>
			<Text my={8}>abstract</Text>
		</Box>
	);
}
