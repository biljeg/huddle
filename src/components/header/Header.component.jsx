import { StyledHeader } from "./Header.styled"
import Button from "../styled/Button.styled"
import logo from "../../assets/images/logo.svg"

export default function Header() {
	return (
		<StyledHeader>
			<img src={logo} />
			<Button background="#fff">Try It free</Button>
		</StyledHeader>
	)
}
