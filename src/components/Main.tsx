import { Button, Grid, Typography } from "@mui/material";
import RadioIcon from "@mui/icons-material/Radio";
import { authorizeUser } from "../utility/authorizeUser";

export function Main() {
	const handleLoginWithSpotify = () => {
		authorizeUser();
	};

	return (
		<Grid
			container
			sx={{
				width: "100%",
				height: "100%",

				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "red",
			}}
		>
			<Button
				variant="contained"
				sx={{ background: "green", color: "whitesmoke" }}
				onClick={handleLoginWithSpotify}
			>
				Login with Spotify
			</Button>
		</Grid>
	);
}
