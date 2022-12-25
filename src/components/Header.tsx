import { AppBar, Container, Typography } from "@mui/material";
import RadioIcon from "@mui/icons-material/Radio";

export function Header() {
	return (
		<AppBar position="static">
			<Container
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "1rem 1.5rem",
				}}
			>
				<RadioIcon />
				<Typography
					variant="h6"
					sx={{
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
					}}
				>
					Spotify-Sidecar
				</Typography>
			</Container>
		</AppBar>
	);
}
