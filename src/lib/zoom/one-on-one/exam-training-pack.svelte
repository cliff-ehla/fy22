<script>
	import {locale, _} from 'svelte-i18n'
	import Icon from '$lib/ui/icon.svelte'
</script>

<div class="mb-4">
	<h2 class="font-bold">{$_('exam_training_pack.title')}</h2>
	<p>{$_('exam_training_pack.subtitle')}</p>
</div>
{#if $locale === 'hk'}
	<p class="mb-4">👉避免浪費錢❗ 浪費時間❗你需要睇睇以下短片。</p>
	<p class="mb-4">👉睇完呢條片，你會明白為什麼之前補習英文，補極都唔得嘅原因；以及要怎麼做，先可以有真正嘅成效？</p>
{/if}
<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video5.mp4"></video>