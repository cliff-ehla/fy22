<script context="module">
	export const prerender = true;
</script>

<script>
	import VocabFeature from '$lib/zoom/one-on-one/vocab-feature.svelte'
	import AfterClassRevisionModule from '$lib/zoom/one-on-one/after-class-revision-module.svelte'
	import ExamTrainingPack from '$lib/zoom/one-on-one/exam-training-pack.svelte'
	import KClassRevisionModule from '$lib/zoom/one-on-one/k-class-revision-module.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="article">
	<div class="p-4 sm:p-8">
		<h1 class="mb-2">{$_('powerful_solution.title')}</h1>
		<p class="text-p2">{$_('powerful_solution.desc')}</p>
	</div>

	<div class="p-4 sm:p-8 bg-gray-100">
		<VocabFeature show_price/>
	</div>

	<div class="p-4 sm:p-8">
		<KClassRevisionModule/>
	</div>

	<div class="p-4 sm:p-8 bg-gray-200">
		<AfterClassRevisionModule show_price/>
	</div>

	<div class="p-4 sm:p-8">
		<ExamTrainingPack show_price/>
	</div>
</div>

<svelte:head>
	<title>{$_('powerful_solution.title')}</title>
</svelte:head>