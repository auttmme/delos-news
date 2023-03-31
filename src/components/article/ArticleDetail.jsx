import React, { useEffect, useState } from "react";
import { Heading, Box, Flex, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import Link from "next/link";

export default function ArticleDetail({
	title,
	author,
	abstract,
	published,
	imageSrc,
	imageAlt,
	url,
}) {
	console.log("data", author, published);

	const [isBought, setIsBought] = useState(false);

	useEffect(() => {
		let articles = JSON.parse(localStorage.getItem("articles"));

		if (articles.find((e) => e.url === url)) {
			setIsBought(true);
		}
	}, [setIsBought, url]);

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
			<Link href={url}>
				{isBought ? (
					<Flex alignItems={"center"}>
						<Text color="blue.800" fontSize={"xl"} fontWeight={"semibold"}>
							Read More
						</Text>
						<ArrowForwardIcon marginLeft={3} boxSize={6} color="blue.800" />
					</Flex>
				) : (
					""
				)}
			</Link>
		</Box>
	);
}
