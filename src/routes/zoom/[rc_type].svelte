<script context="module">
	export const load = async ({fetch, page}) => {
		console.log(page.params)
		const res = await fetch(`/zoom/list_zoom_tutor.json?rc_type=${page.params.rc_type}`)
		const json = await res.json()

		const _body = {
			rc_type: page.params.rc_type,
			rc_tag: page.query.rc_tag || 'all'
		}
		const res2 = await fetch(`/zoom/list_registrable_classroom.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(_body)
		})
		const json2 = await res2.json()

		if (res.ok) {
			return {
				props: {
					teacher_list: json.data,
					classroom: json2.data
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
	export let classroom
</script>

<b>Tutor</b>
{#if teacher_list && teacher_list.length}
	{#each teacher_list as t}
		<p>{t.display_name}</p>
	{/each}
{/if}

<b>Classroom</b>
{#if classroom && classroom.length}
	{#each classroom as c}
		<p>
			<a href="/zoom/{c.rc_type}-{c.tutor_group_id}">{c.name}</a>
		</p>
	{/each}
{/if}