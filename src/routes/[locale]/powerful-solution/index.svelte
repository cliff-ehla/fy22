<script context="module">
	export const prerender = true;
</script>

<script>
	import Icon from '$lib/ui/icon.svelte'
	import {_} from 'svelte-i18n'
</script>

<div class="">
	<div class="p-4 sm:p-8">
		<h1 class="text-t2 font-bold mb-4">超效學習配套功能</h1>
		<p>EHLA提供的英文學習資源、人工智能、學習功能以及配套，目前為全球唯一，尚沒有任何一間機構能夠跟得到。 </p>
	</div>

	<div class="p-4 sm:p-8 bg-gray-100">
		<div class="mb-4">
			<h2 class="font-bold text-p4">{$_('powerful_solution.vocab.title')}</h2>
			<p class="text-p2">{$_('powerful_solution.vocab.subtitle')}</p>
		</div>
		<ul>
			{#each [1,2,3,4,5,6] as i}
				<li class="flex mb-2">
					<Icon name="tick" className="w-6 text-green-500"/>
					<p class="ml-2">{$_(`powerful_solution.vocab.p${i}`)}</p>
				</li>
			{/each}
		</ul>
		<video controls class="mb-2" src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video_1.mp4"></video>
		<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video2.mp4"></video>
	</div>

	<div class="p-4 sm:p-8">
		<div class="mb-4">
			<h2 class="font-bold text-p4">K班溫習鞏固環節</h2>
			<p class="text-p2">對K班小朋友英文提升效果超乎你想像</p>
		</div>

		<p>極為獨特的課後溫習鞏固環節, 對K班小朋友英文提升效果超乎你想像! 以下小視頻給你清晰了解： </p>
		<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video3.mp4"></video>
	</div>

	<div class="p-4 sm:p-8 bg-gray-200">
		<div class="mb-4">
			<h2 class="font-bold text-p4">重要課後鞏固配套(7歲＋)</h2>
		</div>
		<p class="text mb-4">避免浪費錢! 浪費時間! 你值得睇睇以下短片。高效溫習鞏固模式解決學習困擾。</p>
		<p class="text mb-4">好多父母未必知道，學生上完堂，好多時一離開課堂，已經將一半學到嘅知識俾返老師! 如果課後唔做溫習鞏固，再過三五日，又唔見咗部分。咁會導致學習成效低下，即浪費錢又浪費時間! 要解決，進行課後溫習鞏固顯得十分必要! </p>
		<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video4.mp4"></video>
	</div>

	<div class="p-4 sm:p-8">
		<div class="mb-4">
			<h2 class="font-bold text-p4">{$_('powerful_solution.exam.title')}</h2>
			<p>{$_('powerful_solution.exam.subtitle')}</p>
		</div>
		<ul class="mb-4">
			{#each [1,2,3,4] as i}
				<li class="flex mb-2">
					<Icon name="tick" className="w-6 text-green-500"/>
					<p class="ml-2">{$_(`powerful_solution.exam.p${i}`)}</p>
				</li>
			{/each}
		</ul>
		<p class="text mb-4 text-gray-500">* {$_('powerful_solution.exam.note')}</p>
		<video controls src="https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/powerful-solution/video5.mp4"></video>
	</div>
</div>