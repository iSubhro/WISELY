import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="normal 900 42px/1.2 lato"
					color="#337ab7"
				>
					WISELY
				</Text>
				<Text font="600 18px lato">
					Call Us: +91 700-338-8693 (India){"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section padding="32px 0 32px 0" sm-padding="40px 0" background="#1a92cb">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="normal 500 26px/1.2 lato"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
				text-align="center"
				sm-font="normal 600 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
			>
				Get Unlimited Access To Wisely ProcureCloud For FREE Upto First 1000 Purchase Orders{"\n\n"}
			</Text>
			<Text
				as="p"
				font="normal 600 50px/1.5 lato"
				margin="20px 0 0 0"
				text-align="center"
				color="#ffffff"
				padding="0px 0px 20px 0px"
				sm-font="normal 600 32px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
			>
				Accelerate Procurement Velocity, Reduce Cost of Purchase & Gain Full Visibility{"\n\n"}
			</Text>
			<Box>
				<Button
					border-radius="80px"
					background="#ec971f"
					border-color="#d58512"
					border-width="2px"
					border-style="solid"
					font="normal 600 16px/1.5 lato"
				>
					Request Demo
				</Button>
				<Button
					border-radius="80px"
					background="#1a92cb"
					border-color="#d58512"
					border-width="2px"
					border-style="solid"
					margin="0px 0px 0px 16px"
					font="normal 600 16px/1.5 lato"
				>
					Create Free Account
				</Button>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});