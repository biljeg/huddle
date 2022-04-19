import { StyledLanding } from "./Landing.styled"
import Hero from "../hero/Hero.component"
import Header from "../header/Header.component"

export default function Landing() {
	return (
		<StyledLanding>
			<div>
				<Header />
				<Hero />
			</div>
		</StyledLanding>
	)
}
