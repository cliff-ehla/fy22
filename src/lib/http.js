const http = (() => {
	async function get (fetch, resource, query) {
		if (query) {
			for (const property in query) {
				// TODO ? &
				resource += `?${property}=${query[property]}`
			}
		}
		const res = await fetch(resource)
		return await res.json()
	}

	async function post (fetch, resource, body) {
		try {
			const res = await fetch(resource, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			})
			return await res.json()
		} catch (e) {
			return {
				success: false,
				data: false,
				status: 400,
				debug: 'Usermodel return fatal error'
			}
		}
	}

	return {
		get,
		post
	}
})()

export {http}