import {http} from "$lib/http.js";
import {writable, get} from "svelte/store";

const factory = (resource) => {
	const store = writable([])
	const cacheOnly = async (fetch) => {
		const cache = get(store)
		if (cache.length)
			return cache
		else
			return await fetchData(fetch)
	}
	const fetchData = async (fetch) => {
		let {data} = await http.get(fetch, resource)
		store.set(data)
		return data
	}
	return {
		fetchData,
		cacheOnly,
		subscribe: store.subscribe
	}
}

export const tag_store = factory('/courseApi/list_registrable_classroom_tag')
export const level_store = factory('/courseApi/list_registrable_classroom_level')
export const tutor_store = factory('/tutorApi/list_zoom_tutor')