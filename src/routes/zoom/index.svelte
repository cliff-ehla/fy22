<script context="module">
	export const load = async ({fetch}) => {
		const res = await fetch('/zoom.json')
		const body = await res.json()
		return {
			props: {
				teacher_list: body.teacher_list
			}
		}
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