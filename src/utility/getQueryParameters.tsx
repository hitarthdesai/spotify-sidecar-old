export function getUserCode() {
	const currentHref = window.location.href;
	const containsQuery = currentHref.indexOf("?") !== -1;
	if (!containsQuery) return;

	// TODO: Implement flow for unsuccessfult auth flows (split across '=' and pair up param and value from query)

	const codeValue = currentHref.split("?")[1].substring(5);
	return codeValue;
}
