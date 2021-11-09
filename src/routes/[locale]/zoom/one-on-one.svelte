<script context="module">
	export const prerender = true;

	export const load = async ({fetch}) => {
		const res = await fetch('/api/one_on_one_advertisement_list.json')
		const json = await res.json()
		return {
			props: {
				ad_list: json.data
			}
		}
	}
</script>

<script>
	export let ad_list
</script>

<div class="p-4 mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 gap-4">
		{#each ad_list as item}
			<div>
				<img class="rounded-sm" src={item.thumbnail_path} alt={item.name}>
				<p class="mt-2 text-blue-500 font-bold">{item.name}</p>
				<p class="text-xs text-gray-500">{item.description}</p>
			</div>
		{/each}
	</div>
</div>