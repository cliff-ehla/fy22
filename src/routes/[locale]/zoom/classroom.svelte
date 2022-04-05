<script context="module">
	import {http} from "$lib/http";
	import {tag_store, level_store, tutor_store} from "$lib/store/classroom.js";

	export const load = async ({fetch, page}) => {
		const p1 = await tutor_store.cacheOnly(fetch)
		const p3 = await tag_store.cacheOnly(fetch)
		const p4 = await level_store.cacheOnly(fetch)
		await Promise.all([p1,p3,p4])
		return true
	}
</script>

<script>
	import dayjs from "dayjs";
	import Spinner from "$lib/ui/Spinner.svelte";
	import {locale} from "svelte-i18n";
	let classroom = []

	let _tag_store
	$: {
		_tag_store = $tag_store.slice()
		_tag_store.splice(1,0,'big_class','small_class')
	}

	import Head from '$lib/head.svelte'
	import LessonPreview from '$lib/zoom/lesson-preview.svelte'
	import {page} from '$app/stores'
	import {_} from "svelte-i18n"
	import {getQueryUrl} from "$lib/helper/get-query-url.js";
	$: _rc_tag = $page.query.get('rc_tag')
	$: _rc_type = $page.query.get('rc_type')
	$: rc_level = $page.query.get('rc_level')
	$: rc_tag = ['big_class','small_class'].includes(_rc_tag) ? undefined : _rc_tag
	$: rc_type = ['big_class','small_class'].includes(_rc_tag) ? _rc_tag.split('_')[0] : undefined
	let page_num = 0
	let show_load_more = true
	let is_loading = false

	$: {
		if (rc_tag || rc_level || rc_type) {
			classroom = []
			page_num = 0
			show_load_more = true
			fetchData()
		}
	}

	const fetchData = async () => {
		is_loading = true
		const {data, success} = await http.post(fetch, '/courseApi/list_registrable_classroom', {
			rc_tag,
			rc_level,
			rc_type,
			start_date: dayjs().add(page_num, 'week').format('YYYY-MM-DD 00:00:00'),
			end_date: dayjs().add(page_num + 1, 'week').format('YYYY-MM-DD 00:00:00'),
		})
		is_loading = false
		if (success) {
			page_num += 1
			classroom = [...classroom, ...data]
			if (data.length === 0) show_load_more = false
		}
	}

	const initLoadMore = node => {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					fetchData()
				}
			});
		});
		observer.observe(node);
		return {
			destroy () {
				observer.disconnect();
			}
		}
	}

	const get_url = (tag, lv) => {
		const query = {
			rc_tag: tag,
			rc_level: lv
		}
		return getQueryUrl(query)
	}
</script>

<div class="mt-6 mb-4 container">
	<p class="mb-2">{$_('teacher_for_big_small_class')}</p>
	<div class="flex overflow-auto">
		{#each $tutor_store as tutor}
			<a href="/{$locale}/zoom/tutor/{tutor.tutor_id}" class="w-16 sm:w-20 mr-2 sm:mr-4">
				<div class="sm:w-20 sm:h-20 w-16 h-16 mx-auto rounded-full bg-cover bg-center" style="background-image: url({tutor.profile_pic})"></div>
				<div class="mt-2 text-xs text-center leading-none">{tutor.display_name}</div>
			</a>
		{/each}
	</div>
</div>

<div class="container">
	<div class="overflow-auto flex mt-4">
		{#each _tag_store as _tag}
			<a href="{get_url(_tag, $page.query.get('rc_level'))}"
			   class="inline-block text-sm {$page.query.get('rc_tag') === _tag ? 'text-blue-500 border-current' : 'text-gray-500 border-gray-300'} whitespace-nowrap rounded border px-4 py-1 mr-2"
			>{$_(_tag)}</a>
		{/each}
	</div>
</div>

<div class="container">
	<div class="overflow-auto flex mt-4">
		<a href="{get_url($page.query.get('rc_tag'), 'all')}"
		   class="inline-block text-sm {$page.query.get('rc_level') === 'all' ? 'text-blue-500 border-current' : 'text-gray-500 border-gray-300'} whitespace-nowrap rounded border px-4 py-1 mr-2"
		>{$_('all')}</a>
		{#each $level_store as lv}
			<a href="{get_url($page.query.get('rc_tag'), lv)}"
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
		{#if show_load_more}
			{#if is_loading}
				<div class="flex justify-center">
					<Spinner/>
				</div>
			{:else}
				<button use:initLoadMore></button>
			{/if}
		{/if}
	{:else}
		{#if is_loading}
			<div class="flex justify-center">
				<Spinner/>
			</div>
		{:else}
			<p class="p-4 text-gray-400">No lessons found</p>
		{/if}
	{/if}
</div>

<Head title={$_('classroom')}/>