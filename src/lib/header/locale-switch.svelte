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
		locale.set(key)
		const new_path = `/${key}` + $page.path.substring(3)
		goto(new_path)
	}
</script>

<div class="flex">
	{#each locales as l}
		<button on:click={() => {onSwitch(l.key)}}>{l.label}</button>
	{/each}
</div>