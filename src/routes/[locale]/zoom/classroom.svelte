<script context="module">
	import {http} from "$lib/http";
	import {tag_store, level_store} from "$lib/store/classroom.js";

	export const load = async ({fetch, page}) => {
		const rc_tag = page.query.get('rc_tag')
		const rc_level = page.query.get('rc_level')

		const p1 = http.get(fetch, '/tutorApi/list_zoom_tutor')

		const p2 = await http.post(fetch, '/courseApi/list_registrable_classroom', {
			rc_tag,
			rc_level
		})

		const p3 = await tag_store.cacheOnly(fetch)

		const p4 = await level_store.cacheOnly(fetch)

		const [res, res2, res3, res4] = await Promise.all([p1,p2,p3,p4])

		if (res.success && res2.success) {
			return {
				props: {
					teacher_list: res.data,
					classroom: res2.data,
					tag_list: res3,
					level_list: res4.data
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
	export let tag_list
	export let level_list
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

{#if $tag_store && $tag_store.length}
	<div class="container">
		<div class="overflow-auto flex mt-4">
			{#each $tag_store as _tag}
				<a href="?rc_tag={_tag}"
				   class="inline-block text-sm {$page.query.get('rc_tag') === _tag ? 'text-blue-500 border-current' : 'text-gray-500 border-gray-300'} whitespace-nowrap rounded border px-4 py-1 mr-2"
				>{$_(_tag)}</a>
			{/each}
		</div>
	</div>
{/if}

<div class="container">
	<div class="overflow-auto flex mt-4">
		{#each $level_store as lv}
			<a href="?rc_tag=all&rc_level={lv}"
			   class="inline-block text-sm {$page.query.get('rc_level') === lv ? 'text-blue-500 border-current' : 'text-gray-500 border-gray-300'} whitespace-nowrap rounded border px-4 py-1 mr-2"
			>{$_(lv)}</a>
		{/each}
	</div>
</div>

<div class="my-8 px-2 sm:px-4 md:mx-auto max-w-screen-lg grid gap-4">
	{#if classroom && classroom.length}
		{#each classroom as c}
			<LessonPreview item={c}/>
			<div class="h-0.5 bg-gray-200"></div>
		{/each}
	{:else}
		<p class="p-4 text-gray-400">No lessons found</p>
	{/if}
</div>

<Head title={$_('classroom')}/>