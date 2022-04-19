import styled from "styled-components"

const Text = styled.p`
	font-family: "Open Sans", sans-serif;
	font-size: 18px;
	margin-bottom: 2rem;
	opacity: ${props => (props.feature ? "0.6" : "1")};
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: ${props => (props.feature ? "14px" : "16px")};
		margin-bottom: ${props => (props.hero ? "28px !important" : "0")};
		line-height: 150%;
		margin: 0;
	}
`

export default Text
