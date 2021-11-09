<script context="module">
	export const load = async ({fetch, page}) => {
		console.log(page.params)
		const res = await fetch(`/zoom/list_zoom_tutor.json?rc_type=${page.params.rc_type}`)
		const json = await res.json()

		const _body = {
			rc_type: page.params.rc_type,
			rc_tag: page.query.rc_tag || 'all'
		}
		const res2 = await fetch(`/zoom/list_registrable_classroom.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(_body)
		})
		const json2 = await res2.json()

		if (res.ok) {
			return {
				props: {
					teacher_list: json.data,
					classroom: json2.data
				}
			}
		}
		return {
			error: new Error(JSON.stringify(json.debug))
		};
	}
</script>

<script>
	export let teacher_list
	export let classroom

	import LessonPreview from '$lib/zoom/preview.svelte'
	import {page} from '$app/stores'
</script>

<div class="mt-6 mb-4 mx-4 md:mx-auto max-w-screen-lg">
	{#if teacher_list && teacher_list.length}
		<div class="flex overflow-auto">
			{#each teacher_list as tutor}
				<a href="/zoom/teacher/{tutor.tutor_id}" class="w-20 sm:w-28 mr-2 sm:mr-4">
					<div class="sm:w-20 sm:h-20 w-16 h-16 mx-auto rounded-full bg-cover bg-center" style="background-image: url({tutor.profile_pic})"></div>
					<div class="mt-2 text-xs text-center leading-none">{tutor.display_name}</div>
				</a>
			{/each}
		</div>
	{/if}
</div>

<div class="mt-4 sm:pt-8 px-2 sm:px-4 md:mx-auto max-w-screen-lg">
	{#if classroom && classroom.length}
		{#each classroom as c}
			<LessonPreview item={c}/>
		{/each}
	{/if}
</div>

<svelte:head>
	<title>{$page.params.rc_type} class - EHLA</title>
</svelte:head>