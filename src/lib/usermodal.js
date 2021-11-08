const base = 'https://usermodel-dev.ehlacademy.org/v1'

export async function usermodel (request, resource, data) {
	const res = await fetch(`${base}/${resource}`, {
		headers: {
			'Authorization': 'Basic ZWhsX2FwaToyNzE1MDkwMA==',
			'Content-Type': 'application/json'
		}
	})
	return {
		status: res.status,
		body: await res.json()
	}
}