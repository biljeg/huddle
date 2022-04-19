import styled from "styled-components"

export const Button = styled.button`
	all: unset;
	cursor: pointer;
	width: auto;
	font-size: 14px;
	text-align: center;
	padding: 13px 60px;
	box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.095);
	border-radius: 24px;
	color: ${props => props.color};
	background-color: ${props => props.background};
	&:hover {
		opacity: 0.7;
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: ${props => (props.primary ? "13px 60px" : "5px 25px")};
		font-size: ${props => (props.primary ? "12px" : "10px")};
		width: auto;
	}
`

export default Button
