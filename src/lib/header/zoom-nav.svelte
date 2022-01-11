<script>
	import {page} from '$app/stores'
	import { _ } from 'svelte-i18n'
	import LocaleSwitch from './locale-switch.svelte'
	import {locale} from 'svelte-i18n'
	$: nav_items = [
		{
			label: 'classroom',
			href: `/${$locale}/zoom/classroom?rc_tag=all`
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
	<div class="flex items-center md:mb-4">
		<a href="/" class="flex items-center">
			<img src="/logo.png" alt="logo" sizes="80" class="w-12 md:w-16"/>
			<h1 class="font-bold text-t1 md:text-t2 ml-2">{$_('site_title')}</h1>
		</a>
		<div class="ml-auto flex items-center">
			<LocaleSwitch/>
		</div>
	</div>
</div>

<div class="m-4 mx-auto max-w-screen-lg px-4 bg-white">
	<div class="flex mt-2 overflow-x-scroll">
		{#each nav_items as item}
			<a
							class:active={$page.path.startsWith(item.href.split('?')[0])}
							href={item.href} class="text-gray-400 text md:text-t1 mr-3 pb-1.5 pt-1.5 whitespace-nowrap relative">{$_(item.label)}
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