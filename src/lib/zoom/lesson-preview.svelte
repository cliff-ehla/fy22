<script>
	export let item
	import dayjs from "dayjs";
	import utc from "dayjs/plugin/utc";
	import {locale, _} from 'svelte-i18n'
	import {lessonSizeLabel} from "$lib/zoom/lesson-size-label";

	dayjs.extend(utc)
	let is_full = item.student_size !== "0" ? item.reg_user_cnt === item.student_size : false
</script>

<a href="/{$locale}/zoom/{item.rc_type}-{item.tutor_group_id}" class="flex">
	<div class="w-20 md:w-28 flex-shrink-0 relative">
		<img src={item.thumbnail_path} alt="hi" class="rounded-sm">
		{#if is_full}
			<svg class="absolute left-0 top-0 fill-current text-red-500 w-1/2 shadow-lg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M40 0H0V40L40 0Z"/>
			</svg>
			<div class="text-white absolute left-1 top-2 transform -rotate-45 text-sm font-bold">{$_('full')}</div>
		{/if}
	</div>
	<div class="ml-2 md:ml-4 flex flex-col sm:p-2">
		<p class="text-blue-500 font-bold">{$locale === 'hk' ? item.sub_cat_alter : item.sub_cat}</p>
		{#if item.name_alter}
			<p class="font-bold text-sm sm:text">{$locale === 'hk' ? item.name_alter : item.name}</p>
		{/if}
		{#if item.rc_level}
			<p class="text-sm sm:text">{$_('level')}: {$_(item.rc_level)}</p>
		{/if}
		{#if item.tutor_name}
			<p class="text-gray-500 text-sm sm:text">{$_('teacher')}: {item.tutor_name}</p>
		{/if}
		<div class="mt-auto">
			<div class="flex mb-1">
			    {#if item.start_date}
			        <div class="tag bg-blue-500">{lessonSizeLabel(item)}</div>
			    {:else}
			        <div class="tag bg-blue-500">{$_(`${item.rc_type}_class`)}</div>
			    {/if}
				{#if item.lang_type}
					<div class="tag {item.is_native_teacher ? 'bg-purple-500' : 'bg-red-700'} ml-1">{$_(item.lang_type)}</div>
				{/if}
			</div>
			<p class="text-blue-500 text-sm sm:text">
				{item.start_date ? dayjs.utc(item.start_date).local().format($locale === 'hk' ? 'YYYY年MMMDD日  (ddd) h:mma' : 'DD MMM YYYY (ddd) h:mma') : $_('class_upon_request')}
			</p>
		</div>
	</div>
</a>
