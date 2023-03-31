import Navbar from "@/components/common/Navbar";
import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import ArticleList from "@/components/article/ArticleList";
import Layout from "@/components/common/Layout";
import MyArticleList from "@/components/article/MyArticleList";

function MyArticle({ viewed, shared, emailed }) {
	const [allArticles, setAllArticles] = useState([]);
	const [myArticles, setMyArticles] = useState([]);

	const getArticles = () => {
		setMyArticles(JSON.parse(localStorage.getItem("articles")));
	};

	const boughtArticles = allArticles.filter((allArt) =>
		myArticles.some((myArt) => allArt.url === myArt.url)
	);

	console.log("myArticles", myArticles);
	console.log("check", boughtArticles);

	useEffect(() => {
		setAllArticles(viewed.results.concat(shared.results, emailed.results));
		getArticles();
	}, [emailed.results, shared.results, viewed.results]);

	return (
		<Layout>
			<Box
				justifyContent={"space-between"}
				flexDirection={["column", "column", "column", "row"]}
			>
				<Text
					fontSize={"2xl"}
					textAlign="center"
					fontWeight="bold"
					color="facebook.800"
				>
					My Article
				</Text>
			</Box>
			{boughtArticles.map((data) => (
				<MyArticleList key={data.id} data={data} />
			))}
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

export default MyArticle;
