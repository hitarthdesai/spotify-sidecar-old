import { Grid, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function App() {
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Grid
				container
				sx={{
					width: "100vw",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Grid item>
					<Header />
				</Grid>
				<Grid item flex={1}>
					<Main />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
