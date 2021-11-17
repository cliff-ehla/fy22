<script context="module">
	export const prerender = true;
</script>

<script>
	import AfterClassRevisionModuleForKid from '$lib/zoom/one-on-one/k-class-revision-module.svelte'
	import Head from '$lib/head.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="container py-4">
	<AfterClassRevisionModuleForKid show_price/>
</div>

<Head title={$_('k3_revision_pack.title')}/>