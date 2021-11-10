<script context="module">
	export const load = async ({fetch}) => {

	}
</script>

<script>
	export let tutor

	import TeacherSection from '$lib/zoom/teacher-section.svelte'
</script>

<div class="max-w-screen-lg mx-auto">
	<div class="p-4">
		<TeacherSection teacher={tutor}/>
	</div>
</div>