<script context="module">
	export const prerender = true;
</script>

<script>
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'

	import VocabFeature from '$lib/zoom/one-on-one/vocab-feature.svelte'
	import AfterClassRevisionModule from '$lib/zoom/one-on-one/after-class-revision-module.svelte'
</script>

<div class="mx-auto p-4 max-w-screen-lg">
	<h1>補底增強(特製) 英文躍升計劃</h1>
	<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.path.split('/').pop()}.jpg" alt="banner">
	<p>🎯 閱讀、寫作及對話主題教學之中，也會延伸教授內容及語境中的相關詞彙、文法(Grammar)、朗讀、發音及表達、閱讀理解技巧。過程當中也會不時滲入日常對話教學。</p>
	<p>🎯 這個課堂另一寶貴的部分，在於老師會持續引導及教授學生就不同閱讀主題一對一進行互動和討論，除了拓寬閱讀視野，對提升學生英文說話及聆聽能力幫助甚大，非本地老師可以做到。</p>
	<ul>
		<li>⭐ 根據學生水平及需要調校內容及難度</li>
		<li>⭐ 學生可以根據水平及需要，靈活選擇以下範疇(可選全部)：</li>
		<li>🎯 閱讀＋說話 </li>
		<li>🎯 閱讀理解技巧提升</li>
		<li>🎯 寫作</li>
		<li>🎯 文法應用</li>
		<li>🎯 聆聽</li>
	</ul>
	<div class="bg-yellow-100 p-2 my-4">
		<div class="text-blue-500 font-bold">
			❝一個同外籍老師學英文，聽及講咗1年英文的小朋友，與另一個無同等經歷的小朋友，分別是什麼？❞
		</div>
		<video class="max-w-full max-w-xl" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/story-telling.mp4"></video>
	</div>
	<div class="bg-yellow-100 p-2 my-4">
		<AfterClassRevisionModule/>
	</div>
	<div class="bg-blue-100 p-2 my-4">
		<VocabFeature/>
	</div>
	<div class="p-4 bg-gray-200 rounded">
		<p>形式：一對一 Zoom</p>
		<p>課時: 每節課30/40分鐘</p>
		<WhatsappEnquiry/>
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