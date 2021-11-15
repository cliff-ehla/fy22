<script context="module">
	export const prerender = true;
</script>

<script>
	import ExamTrainingPack from '$lib/zoom/one-on-one/exam-training-pack.svelte'
	import Head from '$lib/head.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="container py-4">
	<ExamTrainingPack show_price/>
</div>

<Head title={$_('exam_training_pack.title')}/>