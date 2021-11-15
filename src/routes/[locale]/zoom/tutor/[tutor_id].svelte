<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch, page}) => {
		const res = await http.get(fetch, '/zoom_tutor_by_id', {
			tutor_id: page.params.tutor_id
		})
		const res2 = await http.post(fetch, '/list_registrable_classroom', {
			rc_tag: "All",
			tutor_id: page.params.tutor_id
		})
		return {
			props: {
				tutor: res.data,
				lessons: res2.data
			}
		}
	}
</script>

<script>
	export let tutor
	export let lessons

	import {_} from 'svelte-i18n'
	import TeacherSection from '$lib/zoom/teacher-section.svelte'
	import LessonPreview from '$lib/zoom/lesson-preview.svelte'
</script>

<div class="max-w-screen-lg mx-auto">
	<div class="p-4">
		<TeacherSection teacher={tutor}/>
	</div>
</div>

<div class="bg-gray-100 border-t border-gray-300">
	<div class="max-w-screen-lg mx-auto p-4 md:px-4 md:pt-8 md:pb-12">
		<p class="font-bold mb-4 md:mb-86">{$_('tutor_lesson')}</p>
		{#if lessons && lessons.length}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each lessons as i}
					<div class="bg-white pb-4 border-gray-300 border-b">
						<LessonPreview item={i}/>
					</div>
				{/each}
			</div>
		{:else}
			<p>No data</p>
		{/if}
	</div>
</div>
