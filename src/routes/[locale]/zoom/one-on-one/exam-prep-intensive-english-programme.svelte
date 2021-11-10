<script context="module">
	export const prerender = true;
</script>

<script>
	import {page} from '$app/stores'
	import ExamTrainingPack from '$lib/zoom/one-on-one/exam-training-pack.svelte'
	import VocabFeature from '$lib/zoom/one-on-one/vocab-feature.svelte'
</script>

<div class="mx-auto p-4 max-w-screen-lg">
	<h1 class="text-t1">呈分試英文特訓外教課程</h1>
	<p>(小四至小六)</p>
	<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.path.split('/').pop()}.jpg" alt="banner">
	<p>為幫學生全面預備呈分試，課程編排上，外籍老師在課堂上的教學，不會只局限在會話等狹窄範疇，而會針對多個範疇(讀、寫、聽、說、文法)對學生進行特訓。</p>
	<p>🎯 閱讀及對話主題教學之中，也會延伸教授內容及語境中的相關詞彙、文法(Grammar)、朗讀、發音及表達、閱讀理解技巧。過程當中也會不時滲入日常對話教學，引導學生to speak like a native. </p>
	<p>🎯 這個課堂另一寶貴的部分，在於老師會持續引導及教授學生就不同閱讀主題一對一進行互動和討論，除了拓寬閱讀視野，對提升學生英文說話及聆聽能力幫助甚大，非本地老師可以做到。</p>

	<ul>
		<li>⭐ 課程真正符合香港教育局要求</li>
		<li>⭐ 讀、寫、聽、說、文法全面兼顧</li>
		<li>⭐ 根據學生水平及需要調校內容及難度</li>
		<li>⭐ 學生可以根據水平及需要，靈活選擇以下範疇(可選全部)：</li>
		<li>🎯 閱讀＋說話 </li>
		<li>🎯 閱讀理解技巧提升</li>
		<li>🎯 寫作</li>
		<li>🎯 文法應用</li>
		<li>🎯 聆聽</li>
		<li>🎯 升中面試對答訓練</li>
	</ul>

	<div class="p-2 bg-yellow-100">
		<ExamTrainingPack/>
	</div>
	<div class="p-2 bg-blue-100">
		<VocabFeature/>
	</div>
</div>

<style>
    h1 {
        @apply mb-4 font-bold;
        font-size: 20px;
    }
    p, ul {
        @apply my-4 text-gray-700;
    }
    li {
        @apply mb-1 text-gray-700;
    }
</style>