<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch, page}) => {
		const res = await http.post(fetch, '/registrable_classroom_by_tutor_group_id', {
			tutor_group_id: page.params.tutor_group_id
		})

		if (res.success) {
			let res2
			if (res.data.tutor_id) {
				res2 = await http.get(fetch, '/zoom_tutor_by_id', {
					tutor_id: res.data.tutor_id
				})
			}

			return {
				props: {
					lesson: res.data,
					tutor: res2 ? res2.data : null
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
	import {lessonSizeLabel} from "$lib/zoom/lesson-size-label";
	import Icon from '$lib/ui/icon.svelte'
	import {getContext} from 'svelte'
	const {openModal} = getContext('modal')
	import LessonDetail from '$lib/zoom/lesson-detail.svelte'
	import {goto} from '$app/navigation'

	dayjs.extend(utc)
	export let lesson
	export let tutor
	let other_slot_items_limit = true

	const onRelatedClassClick = (_lesson) => {
		if (_lesson.tutor_group_id) {
			goto(`/${$locale}/zoom/${_lesson.rc_type}-${_lesson.tutor_group_id}`)
		} else {
			openModal(LessonDetail, {
				lesson: _lesson
			})
		}
	}
</script>

{#if tutor}
<div class="bg-gray-100 md:pt-8">
	<div class="h-64 md:h-96 bg-center mx-auto bg-cover bg-center md:rounded-lg" style="background-image: url({lesson.thumbnail_path_header}); max-width: 720px"></div>
	<div class="bg-blue-500 text-white h-12 flex items-center md:rounded-t-lg -mt-4 md:mt-4">
		<div class="max-w-screen-lg mx-auto w-full px-4">
			{dayjs.utc(lesson.start_date).local().format($locale === 'hk' ? 'YYYY年MMMDD日  (ddd) h:mma' : 'DD MMM YYYY (ddd) h:mma')}
		</div>
	</div>
</div>

<div class="bg-white max-w-screen-lg mx-auto p-4">
	<p class="text-blue-500 font-bold text-t1">{$locale === 'hk' ? lesson.sub_cat_alter : lesson.sub_cat}</p>
	<p class="font-bold md:text-xl">{lesson.name}</p>
	<p class="text-gray-500 text-sm mt-2">{$_('level')}: {$_(lesson.rc_level)}</p>
	<p class="text-gray-500 text-sm">{$_('duration')}: {lesson.duration} {$_('minutes')}</p>
	<p class="text-gray-500 text-sm">{$_('teacher')}: {lesson.tutor_name}</p>
	{#if lesson.start_date}
        <div class="tag bg-blue-500">{lessonSizeLabel(lesson)}</div>
    {:else}
        <div class="tag bg-blue-500">{$_(`${lesson.rc_type}_class`)}</div>
    {/if}
	<div class="tag {lesson.is_native_teacher ? 'bg-purple-500' : 'bg-red-700'}">{$_(lesson.lang_type)}</div>
	<p class="mt-4 text-gray-500">{@html $locale === 'hk' ? lesson.description_alter : lesson.description}</p>
</div>

<div class="bg-gray-100 py-4 border-t border-gray-200">
	<div class="container">
		<h3 class="mb-2 font-bold">{$_('other_time_slot')}</h3>
		{#if lesson.other_time_slots.length > 0}
			{#each lesson.other_time_slots.slice(0, other_slot_items_limit ? 3: 9999) as slot}
				<a href="{slot.rc_type}-{slot.tutor_group_id}" class="flex py-2 text-sm border-b border-gray-200 items-center">
					<div class="flex-1">
						<p class="text-blue-500">{dayjs.utc(slot.start_date).local().format($locale === 'hk' ? 'YYYY年MMMDD日  (ddd) h:mma' : 'DD MMM YYYY (ddd) h:mma')}</p>
						<p class="text-gray-400">{$_('teacher')}: {slot.tutor_name}</p>
						<div class="tag bg-blue-500">{lessonSizeLabel(slot)}</div>
						<div class="tag {slot.is_native_teacher ? 'bg-purple-500' : 'bg-red-700'}">{$_(slot.is_native_teacher ? 'Native-speaker-teacher-class' : 'Bilingual-class')}</div>
					</div>
					<Icon name="right" className="flex-shrink-0 ml-4 w-4 text-gray-400"/>
				</a>
			{/each}
		{:else}
			<p class="text-gray-400 text-sm">{$_('no_data')}</p>
		{/if}
		{#if lesson.other_time_slots.length > 3}
			<div class="flex justify-center">
				<button on:click={() => {other_slot_items_limit = !other_slot_items_limit}} class="border border-current text-blue-500 px-4 py-1 leading-none rounded-full hover:bg-blue-500 hover:text-white">
					{$_(other_slot_items_limit ? 'show_all' : 'show_less')}
				</button>
			</div>
		{/if}
	</div>
</div>

<div class="bg-gray-100 py-4 border-t border-gray-200">
	<div class="container">
		<h3 class="mb-2 font-bold">{$_('related_class')}</h3>
		{#if lesson.related_class.length}
			{#each lesson.related_class as c}
				<div class="flex overflow-x-scroll">
					<div on:click={() => {onRelatedClassClick(c)}} class="w-32 mr-2 flex-shrink-0 cursor-pointer">
						<img class="rounded shadow" src={c.thumbnail_path} alt={c.name}>
						<p class="text-sm text-gray-500 leading-tight mt-1">{c.name}</p>
					</div>
				</div>
			{/each}
		{:else}
			<p class="text-gray-500 text-sm">{$_('no_data')}</p>
		{/if}
	</div>
</div>

<div class="bg-gray-100 p-4 border-t border-gray-200">
	<div class="max-w-screen-lg mx-auto">
		<TeacherSection teacher={tutor}/>
	</div>
</div>
{:else}
	<div class="bg-gray-100 md:pt-8">
		<div class="h-64 md:h-96 bg-center mx-auto bg-cover bg-center md:rounded-lg" style="background-image: url({lesson.thumbnail_path_header}); max-width: 720px"></div>
	</div>
	<div class="bg-white max-w-screen-lg mx-auto p-4">
		<p class="text-blue-500 font-bold text-t1">{$locale === 'hk' ? lesson.sub_cat_alter : lesson.sub_cat}</p>
		<p class="font-bold md:text-xl">{lesson.name}</p>
		{#if lesson.start_date}
            <div class="tag bg-blue-500">{lessonSizeLabel(lesson)}</div>
        {:else}
            <div class="tag bg-blue-500">{$_(`${lesson.rc_type}_class`)}</div>
        {/if}
		<div class="tag {lesson.is_native_teacher ? 'bg-purple-500' : 'bg-red-700'}">{$_(lesson.lang_type)}</div>
		<p class="mt-4 text-gray-500">{@html $locale === 'hk' ? lesson.description_alter : lesson.description}</p>
	</div>
{/if}

<Head title={lesson.name}
      description={$locale === 'hk' ? lesson.sub_cat_alter : lesson.sub_cat}
      image={lesson.thumbnail_path_square}/>
