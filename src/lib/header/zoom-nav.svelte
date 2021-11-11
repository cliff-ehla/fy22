<script>
	import {page} from '$app/stores'
	import { _ } from 'svelte-i18n'
	import LocaleSwitch from './locale-switch.svelte'
	import {locale} from 'svelte-i18n'
	$: nav_items = [
		{
			label: 'big_class',
			href: `/${$locale}/zoom/big?tag=all`
		},
		{
			label: 'small_class',
			href: `/${$locale}/zoom/small?tag=all`
		},
		{
			label: 'one_on_one',
			href: `/${$locale}/zoom/one-on-one`
		},
		{
			label: 'powerful_solution.title',
			href: `/${$locale}/powerful-solution`
		}
	]
</script>

<div class="m-4 mx-auto max-w-screen-lg px-4">
	<div class="flex items-center">
		<a href="/" class="flex items-center">
			<img src="/logo.png" alt="logo" sizes="80" class="w-12"/>
			<h1 class="font-bold md:text-h1 text-t1 ml-2">{$_('title')}</h1>
		</a>
		<div class="ml-auto flex items-center">
			<LocaleSwitch/>
		</div>
	</div>
	<div class="flex mt-2 overflow-x-scroll">
		{#each nav_items as item}
			<a
							class:active={$page.path.startsWith(item.href.split('?')[0])}
							href={item.href} class="text-gray-400 text md:text-p3 mr-3 pb-1 whitespace-nowrap relative">{$_(item.label)}
				{#if $page.path.startsWith(item.href.split('?')[0])}
					<span class="absolute h-0.5 bg-black inset-x-0 bottom-0"></span>
				{/if}
			</a>
		{/each}
	</div>
</div>

<style>
	.active {
			@apply text-black font-bold;
	}
</style>