<script>
	import Icon from '$lib/ui/icon.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="mb-4">
	<h2 class="">{$_('powerful_solution.vocab.title')}</h2>
	<p class="">{$_('powerful_solution.vocab.subtitle')}</p>
</div>
<ul>
	{#each [1,2,3,4,5,6] as i}
		<li class="flex">
			<Icon name="tick" className="w-6 text-green-500"/>
			<div class="ml-2">{$_(`powerful_solution.vocab.p${i}`)}</div>
		</li>
	{/each}
</ul>
<video controls class="mb-2" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video_1.mp4"></video>
<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video2.mp4"></video>

<style>
    h2 {
        @apply mb-4 font-bold;
        font-size: 20px;
    }
    p, ul {
        @apply my-4 text-gray-700;
    }
    li {
        @apply mb-1 text-gray-700;
    }
</style>