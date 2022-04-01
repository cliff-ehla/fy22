<script>
	export let teacher
	import TeacherPreview from './teacher-preview.svelte'
	import {_, locale} from 'svelte-i18n'
</script>

<div>
	<TeacherPreview {teacher}/>
	<div class="mt-4 sm:mt-8">
		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
			{#if teacher.videos}
				{#each teacher.videos as v}
					<div>
						<p class="font-bold mb-2">{v[`title_${$locale}`]}</p>
						{#if v.link.startsWith('https')}
							<video controls class="rounded w-full" src={v.link}></video>
						{:else}
							<div class="bg-black w-full rounded relative" style="padding-top: 56.25%">
								<iframe src="https://www.youtube.com/embed/{v.link}"
								        class="absolute inset-0 w-full h-full"
								        title="YouTube video player" frameborder="0"
								        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

								</iframe>
							</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div class="mt-4 sm:mt-8">
		<p class="font-bold mb-2">{$_('about')} {teacher.display_name}</p>
		<p class="text-gray-500 leading-relaxed">{@html $locale === 'hk' ? teacher.description_hk : teacher.description}</p>
	</div>
</div>
