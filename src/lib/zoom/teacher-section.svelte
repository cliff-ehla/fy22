<script>
	export let teacher
	import TeacherPreview from './teacher-preview.svelte'
</script>

<div>
	<TeacherPreview {teacher}/>
	<div class="mt-4 sm:mt-8">
		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
			<div>
				<p class="font-bold mb-2">Introduction</p>
				<div class="bg-black w-full rounded relative" style="padding-top: 56.25%">
					<video controls class="rounded absolute inset-0" src={teacher.video_intro}></video>
				</div>
			</div>
			<div>
				<p class="font-bold mb-2">Lesson demo</p>
				<div class="bg-black w-full rounded relative" style="padding-top: 56.25%">
					<video controls class="rounded absolute inset-0" src={teacher.video_demo}></video>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-4 sm:mt-8">
		<p class="font-bold mb-2">About {teacher.display_name}</p>
		<p class="text-gray-500">{@html teacher.description}</p>
	</div>
</div>
