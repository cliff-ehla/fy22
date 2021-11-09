<script context="module">
	export const prerender = true;
</script>

<script>
	const ad_list = [
		{
			title_en: 'Story telling and speaking',
			title_hk: '英文故事閱讀與會話課堂',
			href: 'story-telling-and-speaking'
		},
		{
			title_en: 'Reading & Speaking Elite Programme',
			title_hk: '精英閱讀與主題對談',
			href: 'reading-and-speaking-elite-programme'
		}
	]
</script>

<div class="p-4 mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 gap-4">
		{#each ad_list as item}
			<div class="mb-4">
<!--				<img class="rounded-sm" src={item.thumbnail_path} alt={item.name}>-->
				<a href="one-on-one/{item.href}" class="mt-2 text-blue-500 font-bold text-t1">{item.title_hk}</a>
			</div>
		{/each}
	</div>
</div>