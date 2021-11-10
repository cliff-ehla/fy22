<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch, page}) => {
		const res = await http.get(fetch, '/list_zoom_tutor', {
			rc_type: page.params.rc_type
		})

		const res2 = await http.post(fetch, '/list_registrable_classroom', {
			rc_type: page.params.rc_type,
			rc_tag: page.query.rc_tag || 'all'
		})

		if (res.success && res2.success) {
			return {
				props: {
					teacher_list: res.data,
					classroom: res2.data
				}
			}
		}
		return {
			error: new Error(JSON.stringify(res.debug)),
			status: 400
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