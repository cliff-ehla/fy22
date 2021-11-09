<script context="module">
	export const prerender = true;
</script>

<script>
	import AfterClassRevisionModule from '$lib/zoom/one-on-one/after-class-revision-module.svelte'
	import VocabFeature from '$lib/zoom/one-on-one/vocab-feature.svelte'
</script>

<div class="p-4">
	<div class="mb-8">
		<h1 class="text-t2 font-bold mb-1">英文故事閱讀與會話課堂</h1>
		<p class="mb-4 text-p3">(L1-L4)</p>
		<p class="text-p2">閱讀與英語會話是英文重要基礎! Zoom課堂提供了不可多得的純正英語環境及機會給孩子，在故事閱讀教學之中學習與外籍老師實時互動，不知不覺提升英文閱讀、聆聽和說話能力。這是香港本地老師和父母難以做到的!</p>
	</div>

	<div class="my-8">
		<h2 class="font-bold text-t1 mb-2">分享</h2>
		<p>❝一個同外籍老師學英文，聽及講咗1年英文的小朋友，與另一個無同等經歷的小朋友，分別是什麼？❞</p>
		以下是視頻解答：
		<video class="max-w-full max-w-xl" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/story-telling.mp4"></video>
	</div>

	<div class="p-2 bg-yellow-100">
		<AfterClassRevisionModule/>
	</div>

	<div class="p-2 bg-blue-100">
		<VocabFeature/>
	</div>
</div>