<script>
	export let item
	import dayjs from "dayjs";
	import {locale, _} from 'svelte-i18n'
	console.log(item)
</script>

<a href="/{$locale}/zoom/{item.rc_type}-{item.tutor_group_id}" class="flex">
	<div class="w-20 md:w-28 flex-shrink-0">
		<img src={item.thumbnail_path} alt="hi" class="rounded-sm">
	</div>
	<div class="ml-2 md:ml-4 flex flex-col sm:p-2">
		<p class="text-blue-500 text-xs sm:text-sm sm:text">{$_(item.rc_tag)}</p>
		{#if item.name_alter}
			<p class="font-bold text-sm sm:text">{$locale === 'hk' ? item.name_alter : item.name}</p>
		{/if}
		{#if item.rc_level}
			<p class="font-bold text-sm sm:text">{$_('level')}: {item.rc_level}</p>
		{/if}
		<p class="text-gray-500 text-xs sm:text-sm mt-2">
			{#if Number(item.student_size) === 9999}
				{$_('unlimited_people_class')}
			{:else if item.rc_type === 'big'}
				{$_('20_people_class')}
			{:else if item.rc_type === 'small'}
				{$_('4_people_class')}
			{/if}
		</p>
		<p class="text-gray-500 text-xs sm:text-sm">{$_('teacher')}: {item.tutor_name}</p>
		<div class="mt-auto">
			<p class="mt-2 text-blue-500 text-sm sm:text">
				{item.start_date ? dayjs(item.start_date).format('DD MMM YYYY HH:mma') : $_('class_upon_request')}
			</p>
		</div>
	</div>
</a>
