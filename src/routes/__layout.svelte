<script>
	import ZoomNav from '$lib/header/zoom-nav.svelte'
	import Modal from '$lib/app-shelf/modal.svelte'
	import '../styles/tailwind-output.css';

	import {addMessages, _, locale} from 'svelte-i18n'
	import en from '../locale/en.json'
	import hk from '../locale/hk.json'
	import {init} from 'svelte-i18n'
	import {page} from '$app/stores'
	import {navigating} from "$app/stores";
	import 'dayjs/locale/zh-hk.js';
	import "../locale/dayjs-hk.js";
	import LoadingBar from '$lib/ui/indeterminate-loading-bar.svelte'
	import {onMount} from 'svelte'
	import {sentry} from "$lib/sentry";
	import dayjs from "dayjs";

	let sentry_dsn = import.meta.env.VITE_SENTRY_DSN
	let env = import.meta.env.VITE_ENV
	addMessages('en', en)
	addMessages('hk', hk)

	init({
		fallbackLocale: 'en',
		initialLocale: $page.params.locale
	})
	dayjs.locale($page.params.locale === 'hk' ? 'zh-hk' : 'en')

	onMount(() => {
		sentry.init()
	})
</script>

<ZoomNav/>

{#if env !== 'production'}
	<div class="bg-yellow-500 fixed top-0 inset-x-0 font-bold text-center z-50" style="font-size: 8px">{env}</div>
{/if}
<main>
	<Modal>
		{#if $navigating}
			<div class="fixed inset-x-0 top-0 z-50">
				<LoadingBar/>
			</div>
		{/if}
		<slot />
	</Modal>
</main>