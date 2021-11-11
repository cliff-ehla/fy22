<script context="module">
	export const prerender = true;
</script>

<script>
	import VocabFeature from '$lib/zoom/one-on-one/vocab-feature.svelte'
	import AfterClassRevisionModule from '$lib/zoom/one-on-one/after-class-revision-module.svelte'
	import ExamTrainingPack from '$lib/zoom/one-on-one/exam-training-pack.svelte'
	import KClassRevisionModule from '$lib/zoom/one-on-one/k-class-revision-module.svelte'
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import {_} from 'svelte-i18n'
</script>

<div class="my-8" use:avoidMultipleVideoPlay>
	<div class="article container mb-8 pb-8 border-b border-gray-200">
		<h1 class="mb-2">{$_('powerful_solution.title')}</h1>
		<p class="text-p2 md:text-p3">{$_('powerful_solution.desc')}</p>
	</div>

	<div class="bg-yellow-100 py-8">
		<div class="container">
			<VocabFeature show_price/>
		</div>
	</div>

	<div class="bg-blue-100 py-8">
		<div class="container">
			<KClassRevisionModule/>
		</div>
	</div>

	<div class="bg-yellow-100 py-8">
		<div class="container">
			<AfterClassRevisionModule show_price/>
		</div>
	</div>

	<div class="bg-blue-100 py-8">
		<div class="container">
			<ExamTrainingPack show_price/>
		</div>
	</div>
</div>

<svelte:head>
	<title>{$_('powerful_solution.title')}</title>
</svelte:head>