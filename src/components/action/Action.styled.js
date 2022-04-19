import styled from "styled-components"

export const ActionStyled = styled.div`
	box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.07);
	border-radius: 15px;
	padding: 50px 100px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 80px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 40px 25px;
		margin: 0 10px;
		text-align: center;
	}
`
