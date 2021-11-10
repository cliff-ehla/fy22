<script context="module">
	export const prerender = true;
</script>

<script>
	import {page} from '$app/stores'
	import WhatsappEnquiry from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'
</script>

<div class="p-4">
	<div class="mb-8">
		<h1 class="text-t2 font-bold mb-1">閱讀、寫作與主題對話</h1>
		<p>英國適應課程 </p>
		<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.path.split('/').pop()}.jpg" alt="banner">
		<p>本課程旨在幫助學生適應英國學校的英文水平要求，讓學生強化學習，以及進行思維訓練，目標是將學生英文綜合能力、思維分析能力及視野提升至英國同級學生的相若水平。 </p>
		<p>這個課堂最寶貴的部分，不在於學了什麼閱讀主題，而在於可以把握機會盡情地和英國老師就某個閱讀主題一對一進行互動和討論，目標是，除了拓寬自己的閱讀視野，還要盡力培養自己能具備Native speaker 語言能力，以提早適應在英國的學習生活! </p>
	</div>

	<div class="p-4 bg-gray-200 rounded">
		<p>形式：一對一 Zoom</p>
		<p>課時: 每節課30/40分鐘</p>
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