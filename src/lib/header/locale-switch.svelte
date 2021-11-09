<script>
	import {locale} from 'svelte-i18n'
	import {goto} from '$app/navigation'
	import {page} from '$app/stores'

	const locales = [
		{
			label: 'EN',
			key: 'en'
		},
		{
			label: 'HK',
			key: 'hk'
		}
	]

	const onSwitch = key => {
		console.log($page.path, $page)
		locale.set(key)
	}
</script>

<div class="flex">
	{#each locales as l}
		<button on:click={() => {onSwitch(l.key)}}>{l.label}</button>
	{/each}
</div>