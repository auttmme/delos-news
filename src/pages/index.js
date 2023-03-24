import ArticleList from "@/components/article/ArticleList";
import { Flex, Box, Text } from "@chakra-ui/react";
import Navbar from "@/components/home/navbar";
import Filter from "@/components/home/Filter";

export default function Home() {
	return (
		<Box>
			<Navbar />
			<Box padding={10}>
				<Flex alignItems={"center"} justifyContent="flex-end">
					<Text fontWeight={"semibold"} marginRight="5">
						Sort By
					</Text>
					<Filter />
				</Flex>
				<Flex justifyContent="center">
					<ArticleList />
				</Flex>
			</Box>
		</Box>
	);
}
