<script>
	export let item
	import dayjs from "dayjs";
	import utc from "dayjs/plugin/utc";
	import {locale, _} from 'svelte-i18n'
	import {lessonSizeLabel} from "$lib/zoom/lesson-size-label";

	dayjs.extend(utc)
</script>

<a href="/{$locale}/zoom/{item.rc_type}-{item.tutor_group_id}" class="flex">
	<div class="w-20 md:w-28 flex-shrink-0">
		<img src={item.thumbnail_path} alt="hi" class="rounded-sm">
	</div>
	<div class="ml-2 md:ml-4 flex flex-col sm:p-2">
		<p class="text-blue-500 font-bold text-sm sm:text">{$locale === 'hk' ? item.sub_cat_alter : item.sub_cat}</p>
		{#if item.name_alter}
			<p class="font-bold text-sm sm:text">{$locale === 'hk' ? item.name_alter : item.name}</p>
		{/if}
		{#if item.rc_level}
			<p class="text-sm sm:text">{$_('level')}: {$_(item.rc_level)}</p>
		{/if}
		<p class="text-gray-500 text-sm sm:text">{$_('teacher')}: {item.tutor_name}</p>
		<div class="mt-auto">
			<div class="flex mb-1">
				<div class="tag bg-blue-500">{lessonSizeLabel(item)}</div>
				<div class="tag bg-purple-500 ml-1">{$_(item.lang_type)}</div>
			</div>
			<p class="text-blue-500 text-sm sm:text">
				{item.start_date ? dayjs.utc(item.start_date).local().format($locale === 'hk' ? 'YYYY年MMMDD日  (ddd) h:mma' : 'DD MMM YYYY (ddd) h:mma') : $_('class_upon_request')}
			</p>
		</div>
	</div>
</a>
