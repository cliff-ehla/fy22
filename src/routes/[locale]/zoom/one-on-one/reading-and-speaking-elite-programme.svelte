<script context="module">
	export const prerender = true;
</script>

<script>
	import {page} from '$app/stores'
</script>

<div class="p-4">
	<div class="mb-8">
		<h1 class="text-t2 font-bold mb-1">精英閱讀與主題對談</h1>
		<img class="rounded my-4" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{$page.path.split('/').pop()}.jpg" alt="banner">
		<p class="mb-4">任教老師：優秀外籍老師</p>
		<p >本課程旨在：</p>
		<p >🎯 透過以下主題範疇，突破傳統學校限制，以精英方式培養學生進行閱讀、寫作思維和語言訓練，以及大幅提升學生的視野。 </p>
		<p >🎯 培養學生(包括精英學生)能夠像外國精英學生一樣，能夠對不同主題範疇，進行深入的口語探討，超越香港精英學生的天然局限。這對學生將來無論升學、海外留學或精英就業，皆極具意義! </p>
		<p >🎯 這個課堂另一寶貴的部分，在於老師會持續引導及教授學生就不同閱讀主題一對一進行互動和討論，除了拓寬閱讀視野，對提升學生英文說話及聆聽能力幫助甚大，非本地老師可以做到。</p>

		<p >主題範疇：</p>
		<p>科學、文化、環保、氣候、歷史、人物、日常生活、世界見聞 </p>

		<b>備註:</b>
		<p>香港學生(包括精英學生)的英文Skeaking能力往往和閱讀和寫作能力相差較大，導致：海外留學時或將來就業工作時處於競爭弱勢! </p>
	</div>
</div>


<style>
    h1 {
        @apply mb-4 font-bold;
        font-size: 20px;
    }
    p {
        @apply mb-4 text-gray-700;
    }
</style>