<script context="module">
	export const prerender = true;
</script>

<script>
	import {_, locale} from 'svelte-i18n'
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	const slug = $page.path.split('/').pop()
</script>

<div class="article mx-auto p-4 max-w-screen-lg" use:avoidMultipleVideoPlay>
	<h1>{$_(slug)}</h1>
	<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.path.split('/').pop()}.jpg" alt="banner">
	{#if $locale === 'hk'}
		<p>🎯 教授各種寫作技巧，例如：動詞、連接詞與形容詞的應用技巧 application of verbs, connectives and adjectives 明喻smiles, 暗喻metaphors, 擬聲詞onomatopoeia, 擬人化personification, 製造緊張和懸疑building tension and suspense...</p>
		<p>🎯 教授各種寫作文體，包括descriptive stories, fiction, non-fiction, recount, peoms, news report, arguments ...</p>
		<p>🎯 Creative writing elements 創意寫作元素：側重於教學生如何運用技巧，一步一步地構建一個具水平的小作品。 同時，加強學生廣泛應用單詞和寫更長、更複雜和更合乎正規語法句子的能力。</p>
	{:else}
		<b>🎯 Advanced Writing Skills</b>
		<p>To teach various advanced writing skills, such as, application of verbs, connectives and adjectives application of verbs, connectives and adjectives, similes, metaphors, onomatopoeia, personification, building tension and suspense...</p>
		<b>🎯 Various Text Types</b>
		<p>To explore various text types, including descriptive stories, fiction, non-fiction, recount, peoms, news report, arguments ...</p>
		<b>🎯 Creative Writing Elements</b>
		<p>It focuses on teaching students how to construct a beautiful writing work step by step. In the meantime, it strengthens their abilities in applying a wide range of words and writing longer, more complex and grammatical sentences.</p>
	{/if}
	<ul class="p-4 bg-gray-200 rounded">
		<li>{$_('lesson_target_writing')}</li>
		<li>{$_('lesson_format')}</li>
		<li>{$_('lesson_duration_40')}</li>
		<WhatsappEnquiry/>
	</ul>
</div>

<svelte:head>
	<title>{$_(slug)}</title>
</svelte:head>
