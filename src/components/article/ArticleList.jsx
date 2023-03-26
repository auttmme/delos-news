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

import NextLink from "next/link";

export default function ArticleList() {
	return (
		<Box width={"full"}>
			<NextLink href="/detail">
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
					<Image
						objectFit="cover"
						maxW={{ base: "100%", sm: "200px" }}
						src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
						alt="Caffe Latte"
					/>

					<Stack>
						<CardBody paddingLeft={[0, 10]}>
							<Heading as="h1" size="xl">
								The perfect latte
							</Heading>
							<Flex py="2">
								<Text color="gray.600">author</Text>
								<Text mx="1" color={"gray.400"}>
									&#x2022;
								</Text>
								<Text color="gray.600">12 april 2021</Text>
							</Flex>
						</CardBody>
					</Stack>
				</Card>
			</NextLink>
		</Box>
	);
}
