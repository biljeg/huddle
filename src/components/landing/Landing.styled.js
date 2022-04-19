import styled from "styled-components"
import desktopBackground from "../../assets/images/bg-hero-desktop.svg"
import mobileBackground from "../../assets/images/bg-hero-mobile.svg"

export const StyledLanding = styled.section`
	background-color: ${({ theme }) => theme.colors.veryPaleCyan};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(${desktopBackground});
	padding: 40px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		background-image: url(${mobileBackground});
		padding: 1.5rem 1rem 0 1rem;
	}
`
