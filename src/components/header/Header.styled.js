import styled from "styled-components"

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
	margin-bottom: 60px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin-bottom: 30px;
		img {
			width: 104px;
			height: 16px;
		}
	}
`
