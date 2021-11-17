<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				error_message: error.message,
				status
			}
		};
	}
</script>

<script>
	import {hub} from "$lib/hub";

	export let error_message;
	export let status;
	hub.log({
		error_message,
		status
	})
</script>

<div class="container text-center py-12">
	<p class="text-h1 mb-4">{status}</p>
	<h1 class="text-t2 mb-8">{error_message}</h1>
	<a class="button" href="big">Search other classes</a>
</div>