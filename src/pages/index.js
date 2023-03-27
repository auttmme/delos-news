import Layout from "@/components/common/Layout";
import { Flex, Box, Text } from "@chakra-ui/react";
import ArticleList from "src/components/article/ArticleList";
import Filter from "src/components/home/Filter";

function Home({ mostPopular }) {
	return (
		<Layout>
			<Flex alignItems={"center"} justifyContent="flex-start" marginBottom={5}>
				<Text fontWeight={"semibold"} marginRight="5">
					Sort By
				</Text>
				<Filter />
			</Flex>
			<Flex justifyContent="center">
				<ArticleList mostPopular={mostPopular} />
			</Flex>
		</Layout>
	);
}

export async function getServerSideProps() {
	const period = 30;

	const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.API_KEY}`;

	const res = await fetch(baseUrl);
	const mostPopular = await res.json();
	return { props: { mostPopular } };
}

export default Home;
