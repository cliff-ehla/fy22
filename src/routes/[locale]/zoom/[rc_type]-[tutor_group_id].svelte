<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch, page}) => {
		const res = await http.post(fetch, '/api/registrable_classroom_by_tutor_group_id.json', {
			tutor_group_id: page.params.tutor_group_id
		})

		if (res.success) {
			const res2 = await http.get(fetch, '/api/zoom_tutor_by_id', {
				tutor_id: res.data.tutor_id
			})

			return {
				props: {
					lesson: res.data,
					tutor: res2.data
				}
			}
		} else {
			console.log('fail', res.debug)
		}
	}
</script>

<script>
	import dayjs from 'dayjs'

	export let lesson
	export let tutor

	import TeacherSection from '$lib/zoom/teacher-section.svelte'
</script>

<div class="bg-gray-100 md:pt-8">
	<div class="h-64 md:h-96 bg-center mx-auto bg-cover bg-center md:rounded-lg" style="background-image: url({lesson.thumbnail_path}); max-width: 720px"></div>
	<div class="bg-blue-500 text-white h-12 flex items-center md:rounded-t-lg -mt-4 md:mt-4">
		<div class="max-w-screen-lg mx-auto w-full px-4">
			{dayjs(lesson.start_time).format('DD MMM YYYY HH:mma')}
		</div>
	</div>
</div>

<div class="bg-white max-w-screen-lg mx-auto p-4">
	<p class="text-blue-500">{lesson.rc_tag}</p>
	<p class="font-bold md:text-xl">{lesson.name}</p>
	<p class="text-gray-500 text-sm mt-2">Recommended level: {lesson.r_level}</p>
	<p class="text-gray-500 text-sm">Teacher: {lesson.tutor_name}</p>

	<div class="bg-blue-500 text-white px-2 py-1 leading-none inline-block rounded-full text-sm mt-2">{lesson.rc_type}</div>

	<p class="mt-4 text-gray-500">{lesson.article_ori}</p>
</div>

<div class="bg-gray-100 p-4 border-t border-gray-200">
	<div class="max-w-screen-lg mx-auto">
		{#if tutor}
			<TeacherSection teacher={tutor}/>
		{/if}
	</div>
</div>

<svelte:head>
	<title>{lesson.name} - {lesson.rc_type} class</title>
</svelte:head>