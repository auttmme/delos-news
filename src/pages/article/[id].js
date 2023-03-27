import ArticleDetail from "@/components/article/ArticleDetail";
import BuyArticleCard from "@/components/article/BuyArticleCard";
import Layout from "@/components/common/Layout";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Details() {
	const router = useRouter();
	const query = router.query;
	console.log(query);

	const title = query.title;
	const author = query.author;
	const abstract = query.abstract;
	const published = query.published;
	const imageSrc = query.src;
	const imageAlt = query.alt;

	return (
		<Layout>
			<Flex
				justifyContent={"space-between"}
				flexDirection={["column", "column", "column", "row"]}
			>
				<ArticleDetail
					title={title}
					author={author}
					abstract={abstract}
					published={published}
					imageSrc={imageSrc}
					imageAlt={imageAlt}
				/>
				<BuyArticleCard />
			</Flex>
		</Layout>
	);
}

export default Details;
