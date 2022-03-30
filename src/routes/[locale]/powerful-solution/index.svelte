<script context="module">
	export const prerender = true;
</script>

<script>
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import Head from '$lib/head.svelte'
	import {_, locale} from 'svelte-i18n'
</script>

<div class="bg-gray-100">
	<div class="my-8 article container" use:avoidMultipleVideoPlay>

		<div class="mb-8 pb-8 border-b border-gray-300">
			<h1 class="mb-2">{$_('powerful_solution.title')}</h1>
			<p class="text-p2 md:text-p3">{$_('powerful_solution.desc')}</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<div class="border-b border-gray-300 pb-8">
				<a href="/{$locale}/powerful-solution/vocabulary-spelling-booster">
					<h2>{$_('vocab_module.title')}</h2>
					<p>{$_('vocab_module.subtitle')}</p>
					<img class="mt-4 rounded shadow-lg" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/vocabulary-spelling-booster.jpg" alt="img">
				</a>
			</div>
			<div class="border-b border-gray-300 pb-8">
				<a href="/{$locale}/powerful-solution/revision-module-for-kid">
					<h2>{$_('k3_revision_pack.title')}</h2>
					<p>{$_('k3_revision_pack.subtitle')}</p>
					<img class="mt-4 rounded shadow-lg" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/revision-module-for-kid.jpg" alt="img">
				</a>
			</div>
			<div class="border-b border-gray-300 pb-8">
				<a href="/{$locale}/powerful-solution/after-class-revision">
					<h2>{$_('after_class_revision.title')}</h2>
					<p>{$_('after_class_revision.subtitle')}</p>
					<img class="mt-4 rounded shadow-lg" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/after-class-revision.jpg" alt="img">
				</a>
			</div>
			<div class="border-b border-gray-300 pb-8">
				<a href="/{$locale}powerful-solution/exam-prep-revision-tutorial-pack">
					<h2>{$_('exam_training_pack.title')}</h2>
					<p>{$_('exam_training_pack.subtitle')}</p>
					<img class="mt-4 rounded shadow-lg" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/exam-prep-revision-tutorial-pack.png" alt="img">
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
			@apply text-blue-500;
	}
</style>

<Head title={$_('powerful_solution.title')}/>
