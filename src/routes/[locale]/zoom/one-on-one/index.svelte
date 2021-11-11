<script context="module">
	export const prerender = true;
	import {locale, _} from 'svelte-i18n'
	import Head from '$lib/head.svelte'
</script>

<script>
	const ad_list = [
		{
			title_en: 'Reading & Speaking Programme (below 6 yro)',
			title_hk: '小精英級K班課程',
			href: 'reading-and-speaking-for-kindergarten'
		},
		{
			title_en: 'English Language Leap Programme',
			title_hk: '補底增強(特製) 英文躍升計劃',
			href: 'english-language-leap-programme'
		},
		{
			title_en: 'Exam-prep (呈分試) Intensive English Programme',
			title_hk: '呈分試英文特訓外教課程',
			subtitle_en: '(P4-P6)',
			subtitle_hk: '(小四至小六)',
			href: 'exam-prep-intensive-english-programme'
		},
		{
			title_en: 'Story telling and speaking',
			title_hk: '英文故事閱讀與會話課堂',
			href: 'story-telling-and-speaking'
		},
		{
			title_en: 'Elite Creative Writing Class',
			title_hk: '精英躍升英文寫作課程',
			href: 'elite-creative-writing-class'
		},
		{
			title_en: 'Reading & Speaking Elite Programme',
			title_hk: '精英閱讀與主題對談',
			href: 'reading-and-speaking-elite-programme'
		},
		{
			title_en: 'Reading & Speaking Elite Programme',
			title_hk: '閱讀、寫作與主題對話',
			subtitle_en: 'UK curriculum',
			subtitle_hk: '英國適應課程',
			href: 'reading-writing-and-speaking-bridging-uk'
		}
	]
</script>

<div class="p-4 mx-auto max-w-screen-lg">
	<div class="grid grid-cols-1 gap-4">
		{#each ad_list as item}
			<div class="mb-4">
				<a class="mb-2 block" href="one-on-one/{item.href}">
					<div class="relative overflow-hidden" style="padding-top: 56%">
						<img class="absolute inset-0 rounded" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/one-on-one/{item.href}.jpg" alt={item.title_en}>
					</div>
					<h2 class="mt-2 text-blue-500 font-bold text-t1">{item[`title_${$locale}`]}</h2>
					{#if item.subtitle_hk}
						<p class="mt-1 text-blue-400 font-bold text-p2">{item[`subtitle_${$locale}`]}</p>
					{/if}
				</a>
			</div>
		{/each}
	</div>
</div>

<Head title={$_('one_on_one')}/>