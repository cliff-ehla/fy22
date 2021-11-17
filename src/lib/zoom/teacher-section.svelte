<script>
	export let teacher
	import TeacherPreview from './teacher-preview.svelte'
	import {_, locale} from 'svelte-i18n'
</script>

<div>
	<TeacherPreview {teacher}/>
	<div class="mt-4 sm:mt-8">
		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
			{#if teacher.video_intro}
				<div>
					<p class="font-bold mb-2">{$_('tutor_video_introduction')}</p>
					<div class="bg-black w-full rounded relative" style="padding-top: 56.25%">
						<video controls class="rounded absolute inset-0" src={teacher.video_intro}></video>
					</div>
				</div>
			{/if}
			{#if teacher.video_demo}
				<div>
					<p class="font-bold mb-2">{$_('tutor_video_demo')}</p>
					<div class="bg-black w-full rounded relative" style="padding-top: 56.25%">
						<video controls class="rounded absolute inset-0" src={teacher.video_demo}></video>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="mt-4 sm:mt-8">
		<p class="font-bold mb-2">{$_('about')} {teacher.display_name}</p>
		<p class="text-gray-500 leading-relaxed">{@html $locale === 'hk' ? teacher.description_hk : teacher.description}</p>
	</div>
</div>
