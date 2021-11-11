<script>
	import Icon from '$lib/ui/icon.svelte'
	import {_} from 'svelte-i18n'
	import Whatsapp from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'

	export let show_price
</script>

<div class="article">
	<h2>{$_('vocab_module.title')}</h2>
	<div role="doc-subtitle" class="mb-4">{$_('vocab_module.subtitle')}</div>
	<ul>
		{#each [1,2,3,4,5,6] as i}
			<li>🎯 {$_(`vocab_module.p${i}`)}</li>
		{/each}
	</ul>
	{#if show_price}
		<div class="p-2 bg-brown-100 rounded" style="font-size: 15px">
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
	<video controls class="mb-2" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video_1.mp4"></video>
	<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video2.mp4"></video>
</div>
