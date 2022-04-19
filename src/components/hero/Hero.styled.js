import styled from "styled-components"
import desktopBackground from "../../assets/images/bg-hero-desktop.svg"
import mobileBackground from "../../assets/images/bg-hero-mobile.svg"

export const HeroStyled = styled.section`
	background-color: ${({ theme }) => theme.colors.veryPaleCyan};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(${desktopBackground});
	padding: 40px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		background-image: url(${mobileBackground});
		padding: 1rem;
	}
`
export const HeroContent = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 1fr;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
`

export const TextContainer = styled.div`
	grid-column: 1 / 6;
	padding: 60px 100px 0 0;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 0;
		margin-bottom: 3rem;
	}
`
export const ImgContainer = styled.div`
	grid-column: 6 / -1;
`
