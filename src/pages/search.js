/* eslint-disable react/jsx-key */
import Layout from "@/components/common/Layout";
import SearchItem from "@/components/search/SearchItem";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function SearchPage({ viewed, shared, emailed }) {
	const router = useRouter();
	const { query } = router.query;
	const searchQuery = query ? JSON.parse(query) : "";

	const [allArticles, setAllArticles] = useState([]);

	useEffect(() => {
		setAllArticles(viewed.results.concat(shared.results, emailed.results));
	}, [emailed.results, shared.results, viewed.results]);

	console.log(allArticles);

	const searchedData = allArticles.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const uniqueData = searchedData.reduce((acc, curr) => {
		if (!acc.some((item) => item.uri == curr.uri)) {
			acc.push(curr);
		}
		return acc;
	}, []);

	console.log("unique data", uniqueData);
	console.log("filtred data", searchedData);

	return (
		<Layout>
			{uniqueData.length == 0 && (
				<Text> No Results found. Try different keywords</Text>
			)}
			{uniqueData.map((data) => (
				<SearchItem data={data} />
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

export default SearchPage;
