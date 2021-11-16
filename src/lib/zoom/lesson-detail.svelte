<script>
	import {_, locale} from 'svelte-i18n'

	export let lesson
</script>

<div class="bg-gray-100 md:pt-8">
	<div class="h-64 md:h-96 bg-center mx-auto bg-cover bg-center md:rounded-lg" style="background-image: url({lesson.thumbnail_path_header}); max-width: 720px"></div>
</div>

<div class="bg-white max-w-screen-lg mx-auto p-4">
	<p class="text-blue-500 font-bold">{$locale === 'hk' ? lesson.sub_cat_alter : lesson.sub_cat}</p>
	<p class="font-bold md:text-xl">{lesson.name}</p>
	<p class="mt-4 text-gray-500">{@html $locale === 'hk' ? lesson.description_alter : lesson.description}</p>
</div>
