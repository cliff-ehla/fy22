<script context="module">
	export const prerender = true;
</script>

<script>
	const ad_list = [
		{
			title_en: 'Elite Creative Writing Class',
			title_hk: '精英躍升寫作課程',
			href: 'elite-creative-writing-class'
		},
		{
			title_en: 'Reading & Speaking Programme (below 6 yro)',
			title_hk: '小精英級K班課程',
			href: 'reading-and-speaking-for-kindergarten'
		},
		{
			title_en: 'Exam-prep (呈分試) Intensive English Programme (P4-P6)',
			title_hk: '呈分試英文特訓外教課程 (小四至小六)',
			href: 'exam-prep-intensive-english-programme'
		},
		{
			title_en: 'Story telling and speaking',
			title_hk: '英文故事閱讀與會話課堂',
			href: 'story-telling-and-speaking'
		},
		{
			title_en: 'Reading & Speaking Elite Programme',
			title_hk: '精英閱讀與主題對談',
			href: 'reading-and-speaking-elite-programme'
		},
		{
			title_en: 'Reading & Speaking Elite Programme',
			title_hk: '閱讀、寫作與主題對話 英國適應課程',
			href: 'reading-writing-and-speaking-bridging-uk'
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