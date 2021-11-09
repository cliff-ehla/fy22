<script>
	import {addMessages, _, locale} from 'svelte-i18n'
	import en from '../../locale/en.json'
	import hk from '../../locale/hk.json'
	import {register, init} from 'svelte-i18n'
	import {page} from '$app/stores'

	addMessages('en', en)
	addMessages('hk', hk)

	init({
		fallbackLocale: 'en',
		initialLocale: $page.params.locale
	})

	$: {
		if ($page.params.locale) {
			locale.set($page.params.locale)
		}
	}
</script>
<h1>{$_('page_title')}</h1>