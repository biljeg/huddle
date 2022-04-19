import Button from "../styled/Button.styled"
import { ActionStyled } from "./Action.styled"
import { useTheme } from "styled-components"
import { H3 } from "../styled/Heading.styled.js"

export default function Action() {
	const theme = useTheme()

	return (
		<ActionStyled>
			<H3>Ready To Build Your Community?</H3>
			<Button primary color="#fff" background={theme.colors.pink}>
				Get Started For Free
			</Button>
		</ActionStyled>
	)
}
