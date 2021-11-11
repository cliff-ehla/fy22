<script>
	import {locale} from 'svelte-i18n'
</script>

<div class="article">
	{#if $locale === 'hk'}
		<h2 class="mb-4">重要課後鞏固配套(7歲＋)</h2>
		<p>避免浪費錢❗ 浪費時間❗ 你值得睇睇以下短片。高效溫習鞏固模式解決學習困擾。</p>
		<p>好多父母未必知道，學生上完堂，好多時一離開課堂，已經將一半學到嘅知識俾返老師❗ 如果課後唔做溫習鞏固，再過三五日，又唔見咗部分。咁會導致學習成效低下，即浪費錢又浪費時間❗ 要解決，進行課後溫習鞏固顯得十分必要❗ </p>
	{:else}
		<h2 class="mb-4">After class revision module</h2>
		<p>Parents can choose to subscribe, at a very low fee, the 💖After-class Revision Module which is unparalleled in the market.  It largely boosts the learning effectiveness. </p>
	{/if}
	<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video4.mp4"></video>
</div>