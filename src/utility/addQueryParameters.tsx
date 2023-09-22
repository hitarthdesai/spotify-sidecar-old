type QueryObject = {
	response_type?: String;
	client_id?: String;
	redirect_uri?: String;

	grant_type?: String;
	code?: String;
};

export function addQueryParameters(base_url: String, args: QueryObject) {
	let temp_url = base_url;
	for (const arg in args) {
		temp_url += arg + "=" + (args as any)[arg] + "&";
	}
	temp_url = temp_url.substring(0, temp_url.length - 1);

	return temp_url as string;
}
