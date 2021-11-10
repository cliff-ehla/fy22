<script>
	import {_} from 'svelte-i18n'
	import Icon from '$lib/ui/icon.svelte'
</script>

<div class="mb-4">
	<h2 class="font-bold">{$_('exam_training_pack.title')}</h2>
	<p>{$_('exam_training_pack.subtitle')}</p>
</div>
<ul class="mb-4">
	{#each [1,2,3,4] as i}
		<li class="flex mb-2">
			<Icon name="tick" className="w-6 text-green-500"/>
			<p class="ml-2">{$_(`exam_training_pack.p${i}`)}</p>
		</li>
	{/each}
</ul>
<p class="text mb-4 text-gray-500">* {$_('exam_training_pack.note')}</p>
<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video5.mp4"></video>