<script context="module">
	import {http} from "$lib/http";

	export const load = async ({fetch}) => {
		const {data} = await http.get(fetch, '/version')
		console.log(data)
		return true
	}
</script>

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

{#if env === 'staging'}
	<div class="bg-yellow-500 fixed top-0 inset-x-0 font-bold text-center z-50" style="font-size: 8px">{env}</div>
{/if}
<main>
	<Modal>
		{#if $navigating}
			<div class="fixed inset-x-0 top-0 z-50">
				<LoadingBar/>
			</div>
		{/if}
		<div class="fixed bottom-4 right-4">
			<a href="https://wa.me/85296548680" class="block">
				<img src="/whatsapp-logo.png" class="w-14 mx-auto" alt="whatsapp">
				<p class="text-green-500 font-bold" style="font-size: 10px">Whatsapp 查詢</p>
			</a>
		</div>
		<slot />
	</Modal>
</main>