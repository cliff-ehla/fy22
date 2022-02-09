<script>
	import {page} from '$app/stores'
	import { _ } from 'svelte-i18n'
	import LocaleSwitch from './locale-switch.svelte'
	import {locale} from 'svelte-i18n'
	import Icon from '$lib/ui/icon.svelte'
	import {fade} from "svelte/transition";

	$: {
		if ($page) {
			mobile_menu_visible = false
		}
	}

	let mobile_menu_visible = false
	$: nav_items = [
		{
			label: 'classroom',
			href: `/${$locale}/zoom/classroom?rc_tag=all&rc_level=all`
		},
		{
			label: 'one_on_one',
			href: `/${$locale}/zoom/one-on-one`
		},
		{
			label: 'powerful_solution.title',
			href: `/${$locale}/powerful-solution`
		},
		{
			label: 'q&a_title',
			href: `/${$locale}/q&a`,
			mobile_only: true
		}
	]
</script>

<div class="transition-transform transform {!mobile_menu_visible ? '-translate-x-full' : 'translate-x-0'} fixed bg-white inset-y-0 left-0 w-80 max-w-screen-sm z-30 border-r border-gray-200 shadow-lg">
	<div class="flex items-center h-16 border-b border-gray-200">
		<img src="/logo.png" alt="logo" sizes="80" class="w-10 ml-4"/>
		<p class="ml-2 font-light">EHLA</p>
		<button on:click={() => {mobile_menu_visible = false}} class="ml-auto w-16 h-16 flex items-center justify-center">
			<Icon name="close" className="w-4"/>
		</button>
	</div>
	<div class="mt-4">
		{#each nav_items as item}
			<a
							class:active={$page.path.startsWith(item.href.split('?')[0])}
							href={item.href} class="block px-4 h-12 flex items-center">{$_(item.label)}
				{#if $page.path.startsWith(item.href.split('?')[0])}
					<span class="absolute h-0.5 bg-black inset-x-0 bottom-0"></span>
				{/if}
			</a>
		{/each}
	</div>
</div>
{#if mobile_menu_visible}
	<div transition:fade on:click={() => {mobile_menu_visible = false}} class="inset-0 fixed bg-black bg-opacity-60 z-20"></div>
{/if}

<div class="h-16 flex items-center px-4">
	<button on:click={() => {mobile_menu_visible = true}} class="w-8 h-8 cc text-gray-500">
		<Icon name="menu" className="w-4"/>
	</button>
	<a href="/" class="flex items-center">
		<img src="/logo.png" alt="logo" sizes="80" class="w-12"/>
		<h1 class="font-bold text-t1 ml-2">{$_('site_title')}</h1>
	</a>
	<div class="ml-auto flex items-center">
		<LocaleSwitch/>
	</div>
</div>

<div class="m-4 mx-auto max-w-screen-lg px-4 bg-white">
	<div class="flex mt-2 overflow-x-scroll">
		{#each nav_items as item}
			{#if !item.mobile_only}
			<a
							class:active={$page.path.startsWith(item.href.split('?')[0])}
							href={item.href} class="text-gray-400 text md:text-t1 mr-3 pb-1.5 pt-1.5 whitespace-nowrap relative">{$_(item.label)}
				{#if $page.path.startsWith(item.href.split('?')[0])}
					<span class="absolute h-0.5 bg-black inset-x-0 bottom-0"></span>
				{/if}
			</a>
			{/if}
		{/each}
	</div>
</div>

<style>
	.active {
			@apply text-black font-bold;
	}
</style>