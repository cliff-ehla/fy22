export const getQueryUrl = (query) => {
	let url = ''
	for (const property in query) {
		if (query[property]) {
			let char = url.includes('?') ? '&' : '?'
			url += `${char}${property}=${query[property]}`
		}
	}
	return url
}
