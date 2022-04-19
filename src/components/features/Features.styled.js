import styled from "styled-components"

export const FeaturesStyled = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 8rem 2rem 3rem 2rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 60px 30px 40px 30px;
	}
`

export const FeaturesContainer = styled.section`
	max-width: 1500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		gap: 36px;
	}
`

export const Feature = styled.div`
	box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
	border-radius: 16px;
	padding: 32px 32px 32px 90px;
	align-items: center;
	gap: 2rem;
	display: flex;
	flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
	max-height: 440px;
	max-width: 1200px;
	& > div {
		flex: 1;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 24px 40px;
		flex-direction: column-reverse;
		text-align: center;
		img {
			max-height: 100%;
		}
	}
`
