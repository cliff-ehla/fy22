<script>
	import {_} from 'svelte-i18n'
	import {page} from '$app/stores'

	export let image = "https://ehla-media-bucket.s3.ap-southeast-1.amazonaws.com/website2021/ehla-zoom-key-image.jpeg";
	export let title = "";
	export let description = $_('site_slogan');
	export let keywords = "online-lesson";
</script>

<svelte:head>
	<title>{title} | EHLA</title>

	<meta name="description" content="{description}" />
	<meta name="keywords" content="{keywords}" />

	<meta property="og:title" content="{title} | EHLA">
	<meta property="og:site_name" content={$_('site_title')}>
	<meta property="og:description" content="{description}">
	<meta property="og:image:secure_url" content="{image}">
	<meta property="og:url" content="https://{$page.host}{$page.path}">

	<meta name="twitter:title" content="{title}">
	<meta name="twitter:description" content="{description}">
	<meta name="twitter:image" content="{image}">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:url" content="https://{$page.host}{$page.path}">
</svelte:head>
