<script>
	import {locale} from 'svelte-i18n'
	import {goto} from '$app/navigation'
	import {page} from '$app/stores'
	import {fade, slide} from 'svelte/transition'
	import Icon from '$lib/ui/icon.svelte'

	const locales = [
		{
			label: 'English',
			key: 'en'
		},
		{
			label: '䌓體',
			key: 'hk'
		}
	]

	let visible

	const onSwitch = key => {
		locale.set(key)
		const new_path = `/${key}` + $page.path.substring(3)
		goto(new_path)
		visible = false
	}
</script>

<button on:click={() => {visible = true}}>
	<Icon name="globe" className="w-5"/>
</button>

{#if visible}
	<div on:click={() => {visible = false}} transition:fade={{duration: 200, ease: 'linear'}} class="fixed z-10 bg-black opacity-50 inset-0"></div>
	<div transition:slide={{duration: 350, ease: 'cubicOut'}} class="fixed z-20 bottom-0 inset-x-0 border border-gray-300 rounded-t bg-white border-b border-gray-200">
		{#each locales as l}
			<button class="h-12 w-full flex items-center justify-center" on:click={() => {onSwitch(l.key)}}>{l.label}</button>
		{/each}
	</div>
{/if}