import React from "react";
import { Heading, Box, Flex, Image, Text } from "@chakra-ui/react";

export default function ArticleDetail({
	title,
	author,
	abstract,
	published,
	imageSrc,
	imageAlt,
}) {
	console.log("data", author, published);

	return (
		<Box width={["full", "full", "full", "65%"]}>
			<Heading fontSize={"4xl"} marginBottom="3">
				{title}
			</Heading>
			<Flex marginBottom={"6"}>
				<Text color="gray.800">{author}</Text>
				<Text mx="3" color={"facebook.400"}>
					&#x2022;
				</Text>
				<Text color="gray.800">{published}</Text>
			</Flex>
			<Flex justifyContent={"center"}>
				<Image
					src={imageSrc}
					alt={imageAlt}
					width="fit-content"
					height={"fit-content"}
					objectFit={"cover"}
				/>
			</Flex>
			<Text my={8}>{abstract}</Text>
		</Box>
	);
}
