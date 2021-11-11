<script>
	import {_, locale} from 'svelte-i18n'
</script>

<h2 class="text-t1 mb-2">{$_('k3_revision_pack.title')}</h2>
<div role="doc-subtitle" class="leading-tight mb-4">{$_('k3_revision_pack.subtitle')}</div>
<p>{$_('k3_revision_pack.desc')}</p>
<p>{$_('k3_revision_pack.note')}</p>
<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video3.mp4"></video>

<style>
	p {
			@apply leading-relaxed mb-4;
	}
</style>
