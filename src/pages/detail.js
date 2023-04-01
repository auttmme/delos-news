import BuyArticleCard from "@/components/article/BuyArticleCard";
import Layout from "@/components/common/Layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import ArticleDetail from "@/components/article/ArticleDetail";

export default function detail() {
	return (
		<Layout>
			<Flex
				justifyContent={"space-between"}
				flexDirection={["column", "column", "column", "row"]}
			>
				<ArticleDetail />
				<BuyArticleCard />
			</Flex>
		</Layout>
	);
}
