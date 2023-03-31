/* eslint-disable react/jsx-key */
import React, { useEffect, useMemo, useState } from "react";
import {
	Card,
	Image,
	Stack,
	CardBody,
	Heading,
	Text,
	Flex,
	Box,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function ArticleList({ viewed, shared, emailed, category }) {
	// console.log("viewed", viewed.results);
	// console.log("shared", shared.results);
	// console.log("emailed", emailed.results);

	const [allArticles, setAllArticles] = useState([]);
	const [mostViewed, setMostViewed] = useState([]);
	const [mostShared, setMostShared] = useState([]);
	const [mostEmailed, setMostEmailed] = useState([]);

	const selectedArticle = useMemo(() => {
		console.log("icha", category);
		if (category.includes("all") && category.length === 4) {
			return allArticles;
		}
		let temp = [];
		if (category.includes("most viewed")) {
			temp = [...temp, ...mostViewed];
		}
		if (category.includes("most shared")) {
			temp = [...temp, ...mostShared];
		}
		if (category.includes("most emailed")) {
			temp = [...temp, ...mostEmailed];
		}
		console.log("icha", temp);
		return temp;
	}, [allArticles, category, mostEmailed, mostShared, mostViewed]);

	useEffect(() => {
		setMostViewed(viewed?.results);
		setMostShared(shared?.results);
		setMostEmailed(emailed?.results);
		setAllArticles(viewed?.results?.concat(shared?.results, emailed?.results));
	}, [emailed?.results, shared?.results, viewed?.results]);

	console.log("viewed", mostViewed);
	console.log("shared", mostShared);
	console.log("emailed", mostEmailed);
	console.log("all", allArticles);

	return (
		<Box width={"full"}>
			{selectedArticle?.map((art) => (
				<NextLink
					href={{
						pathname: `/article/${art?.id}`,
						query: {
							title: art?.title,
							author: art?.byline,
							abstract: art?.abstract,
							published: art?.published_date,
							src: art?.media?.[0]?.["media-metadata"][2].url,
							alt: art?.caption,
							url: art?.url,
						},
					}}
				>
					<Card
						direction={{ base: "column", sm: "row" }}
						overflow="hidden"
						variant="outline"
						paddingTop="10"
						paddingBottom={[0, 10]}
						border="0"
						borderBottom="1px"
						borderBottomColor="gray.300"
						borderRadius="0"
					>
						{/* prettier-ignore */}
						<Image
									objectFit="cover"
									maxW={{ base: "100%", sm: "200px" }}
									src={art?.media?.[0]?.["media-metadata"][2].url}
									alt={art?.caption}
								/>
						<Stack>
							<CardBody paddingLeft={[0, 10]}>
								<Heading as="h1" size="lg">
									{art.title}
								</Heading>
								<Flex py="2">
									<Text color="gray.600">{art?.byline}</Text>
									<Text mx="3" color={"facebook.400"}>
										&#x2022;
									</Text>
									<Text color="gray.600">{art?.published_date}</Text>
								</Flex>
							</CardBody>
						</Stack>
					</Card>
				</NextLink>
			))}
		</Box>
	);
}
