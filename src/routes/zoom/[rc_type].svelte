<script context="module">
	export const load = async ({fetch, page}) => {
		const res = await fetch(`/zoom/list_zoom_tutor.json?rc_type=${page.params.rc_type}`)
		const json = await res.json()
		if (res.ok) {
			return {
				props: {
					teacher_list: json.data
				}
			}
		}
		return {
			error: new Error(JSON.stringify(json.debug))
		};
	}
</script>

<script>
	export let teacher_list
</script>

<h1>zoom teacher list</h1>

{#if teacher_list && teacher_list.length}
	{#each teacher_list as t}
		<p>{t.display_name}</p>
	{/each}
{/if}