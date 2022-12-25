export function authorizeUser() {
	const base_url = "https://accounts.spotify.com/authorize?";
	const new_url = addQueryParameter(base_url, {
		response_type: "code",
		client_id: "c52a5b5bd12b4b088194b267c80ba8c0",
		redirect_uri: "http://127.0.0.1:5173/",
	});

	window.location.replace(new_url);
}

function addQueryParameter(
	base_url: String,
	args: { response_type: String; client_id: String; redirect_uri: String }
) {
	let temp_url = base_url;
	for (const arg in args) {
		temp_url += arg + "=" + (args as any)[arg] + "&";
	}
	temp_url = temp_url.substring(0, temp_url.length - 1);

	return temp_url as string;
}
