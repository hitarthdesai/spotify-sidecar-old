import { addQueryParameters } from "./addQueryParameters";

export function authorizeUser() {
	const base_url = "https://accounts.spotify.com/authorize?";
	const new_url = addQueryParameters(base_url, {
		response_type: "code",
		client_id: "c52a5b5bd12b4b088194b267c80ba8c0",
		redirect_uri: "http://127.0.0.1:5173/",
	});

	window.location.replace(new_url);
}
