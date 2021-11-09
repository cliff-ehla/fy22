<script context="module">
	export const prerender = true;
</script>

<script>
	import Icon from '$lib/ui/icon.svelte'
	import VocabFeature from '$lib/zoom/one-on-one/vocab-feature.svelte'
	import AfterClassRevisionModule from '$lib/zoom/one-on-one/after-class-revision-module.svelte'
	import ExamTrainingPack from '$lib/zoom/one-on-one/exam-training-pack.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="">
	<div class="p-4 sm:p-8">
		<h1 class="text-t2 font-bold mb-4">超效學習配套功能</h1>
		<p>EHLA提供的英文學習資源、人工智能、學習功能以及配套，目前為全球唯一，尚沒有任何一間機構能夠跟得到。 </p>
	</div>

	<div class="p-4 sm:p-8 bg-gray-100">
		<VocabFeature/>
	</div>

	<div class="p-4 sm:p-8">
		<div class="mb-4">
			<h2 class="font-bold text-p4">K班溫習鞏固環節</h2>
			<p class="text-p2">對K班小朋友英文提升效果超乎你想像</p>
		</div>

		<p>極為獨特的課後溫習鞏固環節, 對K班小朋友英文提升效果超乎你想像! 以下小視頻給你清晰了解： </p>
		<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video3.mp4"></video>
	</div>

	<div class="p-4 sm:p-8 bg-gray-200">
		<AfterClassRevisionModule/>
	</div>

	<div class="p-4 sm:p-8">
		<ExamTrainingPack/>
	</div>
</div>