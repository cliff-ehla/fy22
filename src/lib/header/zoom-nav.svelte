<script>
	import {page} from '$app/stores'
	import { _ } from 'svelte-i18n'
	import LocaleSwitch from './locale-switch.svelte'
	import {locale} from 'svelte-i18n'
	$: nav_items = [
		{
			label: 'zoom.small_class',
			href: `/${$locale}/zoom/small?tag=all`
		},
		{
			label: 'zoom.big_class',
			href: `/${$locale}/zoom/big?tag=all`
		},
		{
			label: 'zoom.one_on_one',
			href: `/${$locale}/zoom/one-on-one`
		},
		{
			label: 'powerful_solution.title',
			href: `/${$locale}/powerful-solution`
		}
	]
</script>

<div class="m-4 mx-auto max-w-screen-lg px-4">
	<div class="flex">
		<h1 class="font-bold md:text-h1 text-p3">{$_('zoom.title')}</h1>
		<div class="ml-auto">
			<LocaleSwitch/>
		</div>
	</div>
	<div class="flex mt-2">
		{#each nav_items as item}
			<a
							class:active={$page.path.startsWith(item.href.split('?')[0])}
							href={item.href} class="text-sm md:text-p3 mr-4 pb-1 whitespace-nowrap relative">{$_(item.label)}
				{#if $page.path.startsWith(item.href.split('?')[0])}
					<span class="absolute h-0.5 bg-black inset-x-0 bottom-0"></span>
				{/if}
			</a>
		{/each}
	</div>
</div>