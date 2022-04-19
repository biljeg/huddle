import styled from "styled-components"

export const H1 = styled.h1`
	font-weight: 600;
	font-size: 40px;
	line-height: 60px;
	margin: 30px 0;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 24px;
		line-height: 150%;
		margin-bottom: 16px;
	}
`

export const H2 = styled.h2`
	font-weight: 600;
	font-size: 28px;
	line-height: 42px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 20px;
		line-height: 150%;
		margin-bottom: 16px;
	}
`
export const H3 = styled.h3`
	font-size: 32px;
	line-height: 188%;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		font-size: 18px;
		line-height: 167%;
		margin-bottom: 24px;
	}
`
