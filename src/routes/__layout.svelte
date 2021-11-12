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

	import * as Sentry from "@sentry/browser";
	import { Integrations } from "@sentry/tracing";

	Sentry.init({
		dsn: "https://10f7700a46d645238b21377f73ec869f@o1067583.ingest.sentry.io/6061306",
		integrations: [new Integrations.BrowserTracing()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0,
	});

	try {
		myUndefinedFunction();
	} catch (e) {
		console.error(e)
	}


	addMessages('en', en)
	addMessages('hk', hk)

	init({
		fallbackLocale: 'en',
		initialLocale: $page.params.locale
	})

	$: {
		if ($page.params.locale) {
			locale.set($page.params.locale)
		}
	}
</script>

<ZoomNav/>
<div class="bg-yellow-500 fixed top-0 inset-x-0 font-bold text-xs text-center">Dev test</div>
<main>
	{#if $navigating}
		<div in:scale={{duration: 1500}} class="fixed top-0 inset-x-0 h-2 bg-red-500 transform duration origin-left transition-transform"></div>
	{/if}
	<slot />
</main>

<style>
	.duration {
			transition-duration: 1500ms;
	}
</style>