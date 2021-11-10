<script context="module">
	export const prerender = true;
</script>

<script>
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'
</script>

<div class="mx-auto p-4 max-w-screen-lg">
	<h1>精英躍升英文寫作課程</h1>
	<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.path.split('/').pop()}.jpg" alt="banner">
	<p>🎯 教授各種寫作技巧，例如：動詞、連接詞與形容詞的應用技巧 application of verbs, connectives and adjectives 明喻smiles, 暗喻metaphors, 擬聲詞onomatopoeia, 擬人化personification, 製造緊張和懸疑building tension and suspense...</p>
	<p>🎯 教授各種寫作文體，包括descriptive stories, fiction, non-fiction, recount, peoms, news report, arguments ...</p>
	<p>🎯 Creative writing elements 創意寫作元素：側重於教學生如何運用技巧，一步一步地構建一個具水平的小作品。 同時，加強學生廣泛應用單詞和寫更長、更複雜和更合乎正規語法句子的能力。</p>
	<div class="p-4 bg-gray-200 rounded">
		<p>對象學生： 具有一定寫作能力的學生</p>
		<p>形式：一對一 Zoom</p>
		<p>課時: 每節課40分鐘</p>
		<WhatsappEnquiry/>
	</div>
</div>

<style>
	h1 {
			@apply mb-4 font-bold text-blue-500 text-t1;
	}
	p {
			@apply mb-4 text-gray-700;
	}
</style>