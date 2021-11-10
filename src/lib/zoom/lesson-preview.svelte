<script>
	export let item
	import dayjs from "dayjs";
	import {locale} from 'svelte-i18n'
</script>

<a href="/{$locale}/zoom/{item.rc_type}-{item.tutor_group_id}" class="flex">
	<div class="w-20 md:w-28 flex-shrink-0">
		<img src={item.thumbnail_path} alt="hi" class="rounded-sm">
	</div>
	<div class="ml-2 md:ml-4 flex flex-col sm:p-2">
		<p class="text-blue-500 text-xs sm:text-sm sm:text">{item.rc_tag}</p>
		<p class="font-bold text-sm sm:text">{$locale === 'hk' ? item.name_alter : item.name}</p>
		<p class="text-gray-500 text-xs sm:text-sm mt-2">{item.r_level}</p>
		<p class="text-gray-500 text-xs sm:text-sm">{item.tutor_name}</p>
		<div class="mt-auto">
			<!--			<div class="bg-blue-500 text-white px-2 py-1 leading-none inline-block rounded-full text-sm">Big class</div>-->
			<p class="mt-2 text-blue-500 text-sm sm:text">{dayjs(item.start_date).format('DD MMM YYYY HH:mma')}</p>
		</div>
	</div>
</a>
