<script>
	import ZoomNav from '$lib/header/zoom-nav.svelte'
	import '../styles/tailwind-output.css';

	import {addMessages, _, locale} from 'svelte-i18n'
	import en from '../locale/en.json'
	import hk from '../locale/hk.json'
	import {register, init} from 'svelte-i18n'
	import {page} from '$app/stores'
	import {navigating} from "$app/stores";
	import {scale} from 'svelte/transition'
	import dayjs from "dayjs";
	import 'dayjs/locale/zh-hk.js';
	import LoadingBar from '$lib/ui/indeterminate-loading-bar.svelte'

	addMessages('en', en)
	addMessages('hk', hk)

	init({
		fallbackLocale: 'en',
		initialLocale: $page.params.locale
	})

	$: {
		if ($page.params.locale) {
			locale.set($page.params.locale)
			if ($page.params.locale === 'hk') {
				dayjs.locale('zh-hk')
			} else {
				dayjs.locale('en')
			}
		}
	}
</script>

<ZoomNav/>
<main>
	{#if $navigating}
		<div class="fixed inset-x-0 top-0 z-50">
			<LoadingBar/>
		</div>
	{/if}
	<slot />
</main>