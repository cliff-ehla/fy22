import {variables} from "$lib/env";
const base = variables.api_base + '/v1'
import {logger} from "$lib/logger";

export async function usermodel (request, resource, data) {
	logger.error('[TEST] This is a testing error only')
	const res = await fetch(`${base}${resource}`, {
		method: request.method,
		headers: {
			'Authorization': 'Basic ZWhsX2FwaToyNzE1MDkwMA==',
			'Content-Type': 'application/json'
		},
		body: data && JSON.stringify(data)
	})
	return {
		status: res.status,
		body: await res.json()
	}
}