<script>
	import {_, locale} from 'svelte-i18n'
	import Whatsapp from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'

	export let show_price
</script>

<div class="article">
	<h2>{$_('vocab_module.title')}</h2>
	<div role="doc-subtitle" class="mb-4">{$_('vocab_module.subtitle')}</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
		<img src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/vocabulary-spelling-booster-1.jpeg" alt="haha" class="rounded">
		<img src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/vocabulary-spelling-booste-2.jpeg" alt="haha" class="rounded">
	</div>
	<ul>
		{#each [1,2,3,4,5,6] as i}
			<li>🎯 {$_(`vocab_module.p${i}`)}</li>
		{/each}
	</ul>
	<div class="grid md:grid-cols-2 gap-4">
		<video controls class="mb-2 w-full max-w-screen-sm" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video_1.mp4"></video>
		<video controls class="w-full max-w-screen-sm" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video2.mp4"></video>
	</div>
	{#if show_price}
		<div class="p-2 bg-brown-100 rounded mt-4">
			{#if $locale === 'hk'}
				<b>公開零售價：每月訂閱費HK$168</b>
			{:else}
				<b>Retail price：HK$168 monthly</b>
			{/if}
			<p class="underline">{$_('vocab_module.order.title')}</p>
			<ul>
				{#each [1,2] as i}
					<li>{$_(`vocab_module.order.p${i}`)}</li>
				{/each}
			</ul>
			<p>{$_('vocab_module.order.p3')}</p>
			<Whatsapp powerful/>
		</div>
	{/if}
</div>
