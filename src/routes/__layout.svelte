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
	import dayjs from "dayjs";
	import 'dayjs/locale/zh-hk.js';
	import "../locale/dayjs-hk.js";
	import LoadingBar from '$lib/ui/indeterminate-loading-bar.svelte'

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

	myUndefinedFunction();

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
<div class="bg-yellow-500 fixed top-0 inset-x-0 font-bold text-xs text-center">Dev test</div>
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