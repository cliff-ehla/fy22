<script>
	import {page} from '$app/stores'
	let nav_items = [
		{
			label: 'zoom.small_class',
			href: '/zoom/small?tag=all'
		},
		{
			label: 'zoom.big_class',
			href: '/zoom/big?tag=all'
		},
		{
			label: 'zoom.one_on_one',
			href: '/zoom/one-on-one'
		},
		{
			label: 'en',
			href: '/en/powerful-solution'
		},
		{
			label: 'hk',
			href: '/hk/powerful-solution'
		}
	]
</script>

<div class="m-4 mx-auto max-w-screen-lg px-4">
	<h1 class="font-bold md:text-h1 text-p3">{('zoom.title')}</h1>
	<div class="flex mt-2">
		{#each nav_items as item}
			<a
							class:active={$page.path.startsWith(item.href.split('?')[0])}
							href={item.href} class="text-sm md:text-p3 mr-4 pb-1 whitespace-nowrap relative">{(item.label)}
				{#if $page.path.startsWith(item.href.split('?')[0])}
					<span class="absolute h-0.5 bg-black inset-x-0 bottom-0"></span>
				{/if}
			</a>
		{/each}
	</div>
</div>