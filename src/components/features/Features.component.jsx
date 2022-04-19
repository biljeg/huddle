import { FeaturesStyled, FeaturesContainer, Feature } from "./Features.styled"

import content from "../../content"
import { H2 } from "../styled/Heading.styled.js"
import Text from "../styled/Text.styled"

export default function Features() {
	return (
		<FeaturesStyled>
			<FeaturesContainer>
				{content.map(card => (
					<Feature key={card.id} reverse={card.id % 2 === 0}>
						<div>
							<H2>{card.title}</H2>
							<Text feature>{card.body}</Text>
						</div>
						<div>
							<img src={`./images/${card.image}`} />
						</div>
					</Feature>
				))}
			</FeaturesContainer>
		</FeaturesStyled>
	)
}
