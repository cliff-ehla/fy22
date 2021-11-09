<script context="module">
	export const prerender = true;
</script>

<script>
	const ad_list = [
		{
			title_en: 'Story telling and speaking',
			title_hk: '英文故事閱讀與會話課堂'
		}
	]
</script>

<div class="p-4 mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 gap-4">
		{#each ad_list as item}
			<div class="mb-4">
<!--				<img class="rounded-sm" src={item.thumbnail_path} alt={item.name}>-->
				<a href="one-on-one/story-telling-and-speaking" class="mt-2 text-blue-500 font-bold text-t1">{item.title_hk}</a>
			</div>
		{/each}
	</div>
</div>