import axios from "axios";
import { Buffer } from "buffer";
import { addQueryParameters } from "./addQueryParameters";

// @ts-ignore
window.Buffer = Buffer;

export function getAccessToken(code: String) {
	const base_url = "https://accounts.spotify.com/api/token";
	const url_data = addQueryParameters("", {
		grant_type: "authorization_code",
		code: code,
		redirect_uri: "http://127.0.0.1:5173/",
	});

	axios({
		method: "post",
		url: base_url,
		data: url_data,
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${new (Buffer as any).from(
				"c52a5b5bd12b4b088194b267c80ba8c0:477ffc4f83594cf0a0fd889535aabd14"
			).toString("base64")}`,
		},
	})
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log("Error: ", error);
		});
}
