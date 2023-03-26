import Navbar from "@/components/common/Navbar";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ArticleList from "@/components/article/ArticleList";
import Layout from "@/components/common/Layout";

export default function myArticle() {
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
				<ArticleList />
			</Box>
		</Layout>
	);
}
