import { HeroContent, TextContainer, ImgContainer } from "./Hero.styled"
import Button from "../styled/Button.styled"
import Text from "../styled/Text.styled"
import { H1 } from "../styled/Heading.styled.js"

import mockups from "../../assets/images/illustration-mockups.svg"
import { useTheme } from "styled-components"
export default function Hero() {
	const theme = useTheme()
	return (
		<HeroContent>
			<TextContainer>
				<H1>Build The Community Your Fans Will Love</H1>
				<Text hero>
					Huddle re-imagines the way we build communities. You have a voice, but
					so does your audience. Create connections with your users as you
					engage in genuine discussion.
				</Text>
				<Button primary color="#fff" background={theme.colors.pink}>
					Get Started For Free
				</Button>
			</TextContainer>
			<ImgContainer>
				<img src={mockups} />
			</ImgContainer>
		</HeroContent>
	)
}
