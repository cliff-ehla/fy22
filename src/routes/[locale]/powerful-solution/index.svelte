<script context="module">
	export const prerender = true;
</script>

<script>
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import Head from '$lib/head.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="bg-gray-100">
	<div class="my-8 article container" use:avoidMultipleVideoPlay>

		<div class="mb-8 pb-8 border-b border-gray-200">
			<h1 class="mb-2">{$_('powerful_solution.title')}</h1>
			<p class="text-p2 md:text-p3">{$_('powerful_solution.desc')}</p>
		</div>

		<div class="grid grid-cols-2 gap-4 md:gap-8">
			<a href="powerful-solution/vocabulary-spelling-booster">
				<img class="mb-4 rounded" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/reading-and-speaking-for-kindergarten.jpg" alt="img">
				<h2>{$_('vocab_module.title')}</h2>
				<p>{$_('vocab_module.subtitle')}</p>
			</a>
			<a href="powerful-solution/revision-module-for-kid">
				<img class="mb-4 rounded" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/reading-and-speaking-for-kindergarten.jpg" alt="img">
				<h2>{$_('k3_revision_pack.title')}</h2>
				<p>{$_('k3_revision_pack.subtitle')}</p>
			</a>
			<a href="powerful-solution/after-class-revision">
				<img class="mb-4 rounded" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/reading-and-speaking-for-kindergarten.jpg" alt="img">
				<h2>{$_('after_class_revision.title')}</h2>
			</a>
			<a href="powerful-solution/exam-prep-revision-tutorial-pack">
				<img class="mb-4 rounded" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/reading-and-speaking-for-kindergarten.jpg" alt="img">
				<h2>{$_('exam_training_pack.title')}</h2>
				<p>{$_('exam_training_pack.subtitle')}</p>
			</a>
		</div>
	</div>
</div>

<Head title={$_('powerful_solution.title')}/>
