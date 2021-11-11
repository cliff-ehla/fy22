<script>
	import {_} from 'svelte-i18n'
	import {page} from '$app/stores'

	export let image = "//ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/ehla-zoom-key-image.jpeg";
	export let title = "";
	export let description = "EHLA | Goes beyond your expectations!";
	export let keywords = "online-lesson";
</script>

<svelte:head>
	<title>{title} | EHLA</title>

	<meta name="description" content="{description}" />
	<meta name="keywords" content="{keywords}" />

	<meta property="og:description" content="{description}">
	<meta property="og:image" content="{image}">
	<meta property="og:site_name" content={$_('site_title')}>
	<meta property="og:title" content="{title}">
	<meta property="og:url" content="{$page.host}{$page.path}">

</svelte:head>
