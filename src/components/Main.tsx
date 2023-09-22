import { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { authorizeUser } from "../utility/authorizeUser";
import { getUserCode } from "../utility/getQueryParameters";
import { getAccessToken } from "../utility/getAccessToken";

export function Main() {
	useEffect(() => {
		const userCode = getUserCode();
		if (!userCode) return;

		getAccessToken(userCode);
	}, []);

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
				onClick={() => authorizeUser()}
			>
				Login with Spotify
			</Button>
		</Grid>
	);
}
