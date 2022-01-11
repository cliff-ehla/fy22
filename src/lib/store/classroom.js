import {http} from "$lib/http.js";
import {writable, get} from "svelte/store";

export const tag_store = (() => {
	const store = writable([])
	const cacheOnly = async (fetch) => {
		const cache = get(store)
		if (cache.length)
			return cache
		else
			return await fetchData(fetch)
	}
	const fetchData = async (fetch) => {
		let {data} = await http.get(fetch, '/courseApi/list_registrable_classroom_tag')
		let tags = data.rc_tags
		store.set(tags)
		return tags
	}
	return {
		fetchData,
		cacheOnly,
		subscribe: store.subscribe
	}
})()