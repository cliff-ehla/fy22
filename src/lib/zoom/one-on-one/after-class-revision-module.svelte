<script>
	import {locale} from 'svelte-i18n'
	import Whatsapp from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'
	export let show_price
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
	<video class="max-w-screen-sm" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video4.mp4"></video>
	{#if show_price}
		<div class="bg-brown-100 rounded p-2 mt-4">
			{#if $locale === 'hk'}
				<p>👉 目前只開放給報讀「一對一」、「大班課」或「小組課」的學生家長以特價每套HK$30訂閱。每套學習時間一個月。</p>
			{:else}
				<p>👉 Currently only open to subscription for one-on-one class, big class or small-group class students at a special price of HK$30 per set. Study time for each set: one month.</p>
			{/if}
			<Whatsapp powerful/>
		</div>
	{/if}
</div>