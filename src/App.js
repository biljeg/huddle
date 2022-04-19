import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styled/GlobalStyles"

import Main from "./components/styled/Main.styled"
import Landing from "./components/landing/Landing.component"
import Features from "./components/features/Features.component"
import Action from "./components/action/Action.component"
import Footer from "./components/footer/Footer.component"

const theme = {
	colors: {
		pink: "hsl(322, 100%, 66%)",
		veryPaleCyan: "hsl(193, 100%, 96%)",
		veryDarkCyan: "hsl(192, 100%, 9%)",
		grayishBlue: "hsl(208, 11%, 55%)",
	},
	breakpoints: {
		laptop: "1100px",
		mobile: "500px",
	},
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Main>
				<Landing />
				<Features />
				<Action />
				<Footer />
			</Main>
		</ThemeProvider>
	)
}

export default App
