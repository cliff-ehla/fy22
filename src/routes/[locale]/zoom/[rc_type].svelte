<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch, page}) => {
		const accepted_rc_type = ['big', 'small']
		const rc_type = page.params.rc_type
		if (!accepted_rc_type.includes(rc_type)) {
			return {
				redirect: 'big',
				status: 302
			}
		}

		const res = await http.get(fetch, '/list_zoom_tutor', {
			rc_type
		})

		const res2 = await http.post(fetch, '/list_registrable_classroom', {
			rc_type,
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
		}
	}
</script>

<script>
	export let teacher_list
	export let classroom

	import Head from '$lib/head.svelte'
	import LessonPreview from '$lib/zoom/lesson-preview.svelte'
	import {page} from '$app/stores'
	import {_} from "svelte-i18n"
</script>

<div class="mt-6 mb-4 container">
	<p class="mb-2">{$_('teacher_for_big_small_class')}</p>
	{#if teacher_list && teacher_list.length}
		<div class="flex overflow-auto">
			{#each teacher_list as tutor}
				<a href="tutor/{tutor.tutor_id}" class="w-16 sm:w-20 mr-2 sm:mr-4">
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
	{:else}
		<p class="p-4 text-gray-400">No lessons found</p>
	{/if}
</div>

<Head title={$_(`${$page.params.rc_type}_class`)}/>