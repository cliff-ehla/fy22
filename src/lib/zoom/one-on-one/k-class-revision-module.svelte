<script>
	import {_, locale} from 'svelte-i18n'
	import Whatsapp from '$lib/zoom/one-on-one/whatsapp-enquiry.svelte'

	export let show_price
</script>

<div class="article">
	<h2 class="mb-2">{$_('k3_revision_pack.title')}</h2>
	<div role="doc-subtitle" class="leading-tight mb-4">{$_('k3_revision_pack.subtitle')}</div>
	<p>{$_('k3_revision_pack.desc')}</p>
	{#if show_price}
		<div class="bg-brown-100 rounded p-2 text-sm">
			<p>{$_('k3_revision_pack.note')}</p>
			<Whatsapp/>
		</div>
	{/if}
	<video class="max-w-screen-sm" controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video3.mp4"></video>
</div>