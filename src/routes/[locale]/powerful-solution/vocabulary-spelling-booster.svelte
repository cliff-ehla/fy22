<script context="module">
	export const prerender = true;
</script>

<script>
	import {avoidMultipleVideoPlay} from "$lib/action/avoid-multiple-video-play";
	import VocabFeature from '$lib/zoom/one-on-one/vocab-feature.svelte'
	import Head from '$lib/head.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="container py-4" use:avoidMultipleVideoPlay>
	<VocabFeature show_price/>
</div>

<Head title={$_('vocab_module.title')}/>