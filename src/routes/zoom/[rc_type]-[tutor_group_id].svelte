<script context="module">
	export const load = async ({fetch, page}) => {
		const body = {
			tutor_group_id: page.params.tutor_group_id
		}
		const res = await fetch('/zoom/registrable_classroom_by_tutor_group_id.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
		const json = await res.json()
		return {
			props: {
				lesson: json.data
			}
		}
	}
</script>

<script>
	export let lesson
</script>

<div class="bg-white max-w-screen-lg mx-auto p-4">
	<p class="text-blue-500">{lesson.rc_tag}</p>
	<p class="font-bold md:text-xl">{lesson.name}</p>
	<p class="text-gray-500 text-sm mt-2">Recommended level: {lesson.r_level}</p>
	<p class="text-gray-500 text-sm">Teacher: {lesson.tutor_name}</p>

	<div class="bg-blue-500 text-white px-2 py-1 leading-none inline-block rounded-full text-sm mt-2">{lesson.rc_type}</div>

	<p class="mt-4 text-gray-500">{lesson.article_ori}</p>
</div>

<svelte:head>
	<title>{lesson.name} - {lesson.rc_type} class</title>
</svelte:head>