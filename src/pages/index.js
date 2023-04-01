import Layout from "@/components/common/Layout";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ArticleList from "@/components/article/ArticleList";
import Filter from "@/components/home/Filter";

function Home({ viewed, shared, emailed }) {
	const [category, setCategory] = useState([]);

	const handleCategory = (category) => {
		setCategory(category);
	};

	const initLocalStorage = () => {
		if (localStorage.getItem("currency") === null) {
			localStorage.setItem("currency", "100000");
		}
		if (localStorage.getItem("articles") === null) {
			localStorage.setItem("articles", JSON.stringify([]));
		}
		if (localStorage.getItem("ticket") === null) {
			localStorage.setItem("ticket", "0");
		}
	};

	useEffect(() => {
		initLocalStorage();
	}, []);

	return (
		<Layout>
			<Filter onCategory={handleCategory} />
			<Flex justifyContent="center">
				{viewed && shared && emailed ? (
					<ArticleList
						data-testid="article-list"
						viewed={viewed}
						shared={shared}
						emailed={emailed}
						category={category}
					/>
				) : (
					<Text>Loading...</Text>
				)}
			</Flex>
		</Layout>
	);
}

export async function getServerSideProps() {
	const period = 30;

	const viewedUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
	const sharedUrl = `https://api.nytimes.com/svc/mostpopular/v2/shared/${period}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
	const emailedUrl = `https://api.nytimes.com/svc/mostpopular/v2/emailed/${period}.json?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;

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
