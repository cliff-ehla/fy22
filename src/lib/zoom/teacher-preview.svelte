<script>
	export let teacher
	import {locale} from 'svelte-i18n'
</script>

<div class="flex items-center">
	<div class="flex-shrink-0 md:w-20 md:h-20 w-16 h-16 rounded-full bg-cover bg-center" style="background-image: url({teacher.profile_pic})"></div>
	<div class="ml-2 md:ml-4">
		<p class="font-bold">{teacher.display_name}</p>
		<p class="text-gray-500 text-sm leading-tight">{@html $locale === 'hk' ? teacher.subtitle_hk : teacher.subtitle}</p>
	</div>
</div>
