<script>
	export let title
</script>

<div class="my-4 p-4 bg-white rounded border border-gray-300">
	<div class="flex text-gray-800">
		<div class="w-8 mb-2">Q：</div>
		<p>{title}</p>
	</div>
	<div class="flex text-gray-500">
		<div class="w-8">A：</div>
		<div><slot/></div>
	</div>
</div>