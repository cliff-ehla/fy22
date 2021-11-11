<script>
	export let teacher = {
		thumbnail_path: 'https://ehla-media-bucket.s3.amazonaws.com/thumbnail_20180101/g2-1515755301446.jpg',
		name: 'Amanda Lay',
		description: '5 Year teaching experience | TEFL English teacher'
	}
</script>

<div class="flex items-start">
	<div class="flex-shrink-0 md:w-20 md:h-20 w-16 h-16 rounded-full bg-cover bg-center" style="background-image: url({teacher.profile_pic})"></div>
	<div class="ml-2 md:ml-4">
		<p class="font-bold">{teacher.display_name}</p>
		<p class="text-gray-500 text-sm leading-tight">{@html teacher.subtitle}</p>
	</div>
</div>
