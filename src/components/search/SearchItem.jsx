import Link from "next/link";
import React from "react";
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

export default function SearchItem({ data }) {
	console.log("data search item", data);

	return (
		<Box>
			<Link
				href={{
					pathname: `/article/${data.id}`,
					query: {
						title: data.title,
						author: data.byline,
						abstract: data.abstract,
						published: data.published_date,
						src: data?.media?.[0]?.["media-metadata"][2].url,
						alt: data.caption,
						url: data.url,
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
									src={data?.media?.[0]?.["media-metadata"][2].url}
									alt={data.caption}
								/>
					<Stack>
						<CardBody paddingLeft={[0, 10]}>
							<Heading as="h1" size="lg">
								{data.title}
							</Heading>
							<Flex py="2">
								<Text color="gray.600">{data.byline}</Text>
								<Text mx="3" color={"facebook.400"}>
									&#x2022;
								</Text>
								<Text color="gray.600">{data.published_date}</Text>
							</Flex>
						</CardBody>
					</Stack>
				</Card>
			</Link>
		</Box>
	);
}
