import Layout from "@/components/common/Layout";
import { Flex, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import ArticleList from "src/components/article/ArticleList";
import Filter from "src/components/home/Filter";

function Home({ viewed, shared, emailed }) {
	const [category, setCategory] = useState([]);

	const handleCategory = (category) => {
		setCategory(category);
	};

	return (
		<Layout>
			<Filter onCategory={handleCategory} />
			<Flex justifyContent="center">
				<ArticleList viewed={viewed} shared={shared} emailed={emailed} />
			</Flex>
		</Layout>
	);
}

export async function getServerSideProps() {
	const period = 30;

	const viewedUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.API_KEY}`;
	const sharedUrl = `https://api.nytimes.com/svc/mostpopular/v2/shared/${period}.json?api-key=${process.env.API_KEY}`;
	const emailedUrl = `https://api.nytimes.com/svc/mostpopular/v2/emailed/${period}.json?api-key=${process.env.API_KEY}`;

	const [viewedRes, sharedRes, emailedRes] = await Promise.all([
		fetch(viewedUrl),
		fetch(sharedUrl),
		fetch(emailedUrl),
	]);

	const [viewed, shared, emailed] = await Promise.all([
		viewedRes.json(),
		sharedRes.json(),
		emailedRes.json(),
	]);

	console.log(viewed, shared, emailed);

	return { props: { viewed, shared, emailed } };
}

export default Home;
