import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import "@testing-library/jest-dom";
import ArticleList from "@/components/article/ArticleList";

jest.mock("next/router", () => ({
	useRouter: jest.fn(),
}));

describe("Home", () => {
	it("renders ArticleList component in Home Page", async () => {
		render(<Home />);
		const articleListElement = await screen.getByTestId("article-list");
		expect(articleListElement).toBeInTheDocument();
	});
});
