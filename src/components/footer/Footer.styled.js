import styled from "styled-components"

export const FooterStyled = styled.footer`
	width: 100%;
	padding: 120px 70px 70px 70px;
	background-color: ${({ theme }) => theme.colors.veryDarkCyan};
	color: #fff;
	font-weight: 400;
	font-family: "Open Sans", sans-serif;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	small {
		font-size: 12px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 140px 16px 46px 16px;
		flex-direction: column;
	}
`

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		flex-direction: column;
	}
`

export const Contact = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 2rem;
	gap: 1rem;
	max-width: 400px;
	width: 100%;

	div {
		display: flex;
		align-items: flex-start;

		img {
			margin-right: 1rem;
			margin-top: 0.3rem;
		}
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 14px;
		line-height: 171%;
		div:first-of-type {
			img {
				margin-top: 0.7rem;
			}
		}
	}
`

export const Pages = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 300px;
	width: 100%;
	margin-right: 2rem;
	div {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	a {
		&:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
	@media (min-width: 1350px) {
		max-width: 500px;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		display: flex;
		flex-direction: column;
		margin-top: 40px;
		div {
			margin-bottom: 24px;
			gap: 24px;
		}
	}
`
export const Social = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	a {
		margin-right: 10px;
	}
	img:hover {
		cursor: pointer;
		fill: #ace63c;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		text-align: center;
		div {
			margin-bottom: 24px;
		}
	}
`
export const Image = styled.img`
	filter: brightness(0%) invert();
	width: 152px;
	height: 24px;
	margin-bottom: 1.5rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-bottom: 1rem;
	}
`
