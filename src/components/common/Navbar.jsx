import React, { useEffect, useState } from "react";
import {
	Box,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	Flex,
	IconButton,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import Search from "../search/Search";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currency, setCurrency] = useState("");

	const getCurrency = () => {
		setCurrency(localStorage.getItem("currency"));
	};

	useEffect(() => {
		getCurrency();
	}, [currency]);

	return (
		<Flex
			px={[5, 10]}
			py={[2, 5]}
			borderBottom="1px"
			borderColor="gray.300"
			justifyContent={["flex-start", "space-between"]}
			alignItems="center"
		>
			<IconButton
				display={{ base: "flex", lg: "none" }}
				size="lg"
				variant="outline"
				colorScheme={"facebook"}
				icon={<HamburgerIcon size="lg" />}
				onClick={onOpen}
			/>
			<Drawer
				size={["full"]}
				isOpen={isOpen}
				onClose={onClose}
				placement="left"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton marginTop={3} size="lg" />
					<DrawerBody paddingTop={5} textAlign={"center"}>
						<Search />
						<Link href="/myArticle">
							<Text
								marginTop={5}
								fontSize="xl"
								fontWeight="semibold"
								color="facebook.800"
							>
								My Article
							</Text>
						</Link>
						<Link href="/luckyDraw">
							<Text
								marginTop={2}
								fontSize="xl"
								fontWeight="semibold"
								color="facebook.800"
							>
								Lucky Draw
							</Text>
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>

			<Flex alignSelf={"center"}>
				<Link href="/">
					<Image
						src="/delosNews.png"
						alt="delos news logo"
						width="180"
						height="40"
					/>
				</Link>
			</Flex>

			<Box
				display={{ base: "none", lg: "flex" }}
				width={[0, 0, "50%", "40%"]}
				justifyContent="flex-end"
			>
				<Flex
					width={[0, 0, "100%"]}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Search />
					<Link href="/myArticle">
						<Text>My Article</Text>
					</Link>
					<Link href="/luckyDraw">
						<Text>Lucky Draw</Text>
					</Link>
					<Popover>
						<PopoverTrigger>
							<IconButton
								backgroundColor={"transparent"}
								icon={<BiUser fontSize="32px" />}
							/>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverHeader>Balance</PopoverHeader>
							<PopoverBody fontSize={"xl"} fontWeight={"bold"}>
								{currency} coins
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</Flex>
			</Box>
		</Flex>
	);
}
