import Layout from "@/components/common/Layout";
import { Flex, Box, Text } from "@chakra-ui/react";
import ArticleList from "src/components/article/ArticleList";
import Navbar from "src/components/common/navbar";
import Filter from "src/components/home/Filter";

export default function Home() {
	return (
		<Layout>
			<Flex alignItems={"center"} justifyContent="flex-start" marginBottom={5}>
				<Text fontWeight={"semibold"} marginRight="5">
					Sort By
				</Text>
				<Filter />
			</Flex>
			<Flex justifyContent="center">
				<ArticleList />
			</Flex>
		</Layout>
	);
}
