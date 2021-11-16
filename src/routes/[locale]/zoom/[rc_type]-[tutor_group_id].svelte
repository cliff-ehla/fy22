<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch, page}) => {
		const res = await http.post(fetch, '/registrable_classroom_by_tutor_group_id', {
			tutor_group_id: page.params.tutor_group_id
		})

		if (res.success) {
			const res2 = await http.get(fetch, '/zoom_tutor_by_id', {
				tutor_id: res.data.tutor_id
			})

			return {
				props: {
					lesson: res.data,
					tutor: res2.data
				}
			}
		}

		return {
			error: 'The classroom you are searching for do not exist',
			status: 400
		}
	}
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import dayjs from 'dayjs'
	import utc from 'dayjs/plugin/utc'
	import Head from '$lib/head.svelte'
	import TeacherSection from '$lib/zoom/teacher-section.svelte'
	dayjs.extend(utc)
	export let lesson
	export let tutor
	console.log(lesson)
</script>

<div class="bg-gray-100 md:pt-8">
	<div class="h-64 md:h-96 bg-center mx-auto bg-cover bg-center md:rounded-lg" style="background-image: url({lesson.thumbnail_path}); max-width: 720px"></div>
	<div class="bg-blue-500 text-white h-12 flex items-center md:rounded-t-lg -mt-4 md:mt-4">
		<div class="max-w-screen-lg mx-auto w-full px-4">
			{dayjs.utc(lesson.start_date).local().format($locale === 'hk' ? 'YYYY年MMMDD日  (ddd) h:mma' : 'DD MMM YYYY (ddd) h:mma')}
		</div>
	</div>
</div>

<div class="bg-white max-w-screen-lg mx-auto p-4">
	<p class="text-blue-500 font-bold">{$locale === 'hk' ? lesson.sub_cat_alter : lesson.sub_cat}</p>
	<p class="font-bold md:text-xl">{lesson.name}</p>
	<p class="text-gray-500 text-sm mt-2">{$_('level')}: {$_(lesson.rc_level)}</p>
	<p class="text-gray-500 text-sm">{$_('duration')}: {lesson.duration} {$_('minutes')}</p>
	<p class="text-gray-500 text-sm">{$_('teacher')}: {lesson.tutor_name}</p>

	<div class="bg-blue-500 text-white px-2 py-1 leading-none inline-block rounded-full text-sm mt-2">
		{#if Number(lesson.student_size) === 9999}
			{$_('unlimited_people_class')}
		{:else if lesson.rc_type === 'big'}
			{$_('20_people_class')}
		{:else if lesson.rc_type === 'small'}
			{$_('4_people_class')}
		{/if}
	</div>
	<div class="bg-purple-500 text-white px-2 py-1 leading-none inline-block rounded-full text-sm mt-2">{$_(lesson.lang_type)}</div>

	<p class="mt-4 text-gray-500">{@html $locale === 'hk' ? lesson.description_alter : lesson.description}</p>

	<h3>Other time slot</h3>
	{#each lesson.other_time_slots as slot}
		<div class="py-4">
			<p>{dayjs.utc(slot.start_date).local().format($locale === 'hk' ? 'YYYY年MMMDD日  (ddd) h:mma' : 'DD MMM YYYY (ddd) h:mma')}</p>
			<p>Teacher {slot.tutor_name}</p>

		</div>
	{/each}
</div>

<div class="bg-gray-100 p-4 border-t border-gray-200">
	<div class="max-w-screen-lg mx-auto">
		{#if tutor}
			<TeacherSection teacher={tutor}/>
		{/if}
	</div>
</div>

<Head title={lesson.name}/>