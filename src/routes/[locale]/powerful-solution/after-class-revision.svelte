<script context="module">
	export const prerender = true;
</script>

<script>
	import AfterClassRevisionModule from '$lib/zoom/one-on-one/after-class-revision-module.svelte'
	import Head from '$lib/head.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="container py-4">
	<AfterClassRevisionModule show_price/>
</div>

<Head title={$_('after_class_revision.title')}/>