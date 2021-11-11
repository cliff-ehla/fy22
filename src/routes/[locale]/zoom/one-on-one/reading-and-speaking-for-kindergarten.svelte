<script context="module">
	export const prerender = true;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'
	import ImportantSharing from '$lib/zoom/one-on-one/important-sharing.svelte'
	import AfterClassRevisionModule from '$lib/zoom/one-on-one/after-class-revision-module.svelte'
	const slug = $page.path.split('/').pop()
</script>

<div class="mx-auto p-4 max-w-screen-lg">
	<h1>{$_(slug)}</h1>
	<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.path.split('/').pop()}.jpg" alt="banner">
	{#if $locale === 'hk'}
		<p>閱讀與英語會話是英文重要基礎! 3至6歲是語言學習一個極為重要的階段。課程提供了不可多得的純正英語環境及機會給孩子，在閱讀教學之中學習與外籍老師實時互動，不知不覺提升英文閱讀和說話能力。這是香港本地老師和父母難以做到的!</p>
		<p>🎯 外籍老師在小故事閱讀及對話主題教學之中，也會延伸教授內容及語境中的相關詞彙、Sentence pattern(句式)、朗讀、發音及表達。過程當中也會不時滲入日常對話教學，引導小朋友to speak like a native.</p>
		<p>🎯 對K2, K3小朋友，課程亦會加入與升小一面試Interview 相關的重要內容。</p>
		<p class="underline">升小一面試經常要求具備以下能力：</p>
		<ul>
			<li>🍏Q&A 英文對答系列*</li>
			<li>🍉Words & pronunciation</li>
			<li>🍇Number recognition</li>
			<li>🍓Show & Tell 看圖說話</li>
			<li>🍑Storytelling 看圖說故事</li>
			<li>🍎Read aloud 小文章朗讀</li>
		</ul>
		<p>*英小或國際學校特別要求小朋友具備相當不錯的英文口語能力</p>
	{:else}
		<p>🎯 For kindergarten kids, the main learning focus is on reading of short stories & rhymes. In the reading context, learning is extended to vocabulary building, phonics, pronunciation, recitation and sentence pattern.</p>
		<p>🎯 In between the reading and extension learning classes, daily life conversation and speaking sessions will be brought in to nurture children's ability to "speak like a native".</p>
		<p>🎯 For K2 & K3, the programme covers P1 interview related content and training (升小一面試Interview 相關的預備內容)</p>
		<ul>
			<li>🍏Q&A</li>
			<li>🍉Words & pronunciation</li>
			<li>🍇Number recognition</li>
			<li>🍓Show & Tell</li>
			<li>🍑Storytelling</li>
			<li>🍎Read aloud</li>
		</ul>
	{/if}

	<div class="bg-yellow-100 p-2 my-4">
		<ImportantSharing/>
	</div>

	<div class="bg-blue-100 p-2 my-4">
		<AfterClassRevisionModule/>
	</div>

	<div class="p-4 bg-gray-200 rounded">
		<ul class="mb-4">
			<li>{$_('lesson_target')}： K2-K3</li>
			<li>{$_('lesson_format')}</li>
			<li>{$_('lesson_duration_30')}</li>
		</ul>
		<WhatsappEnquiry/>
	</div>
</div>

<svelte:head>
	<title>{$_(slug)}</title>
</svelte:head>

<style>
    h1 {
        @apply mb-4 font-bold text-t1;
    }
    p {
        @apply mb-6 text-gray-700 leading-relaxed;
    }
    li {
		    @apply mb-1;
    }
</style>