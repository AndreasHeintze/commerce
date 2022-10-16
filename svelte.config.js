// https://codechips.me/tailwindcss-sveltekit-the-easy-way/

import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
	kit: {
		// target: 'body'
		alias: {
			$components: 'src/components',
      $stores: 'src/stores'
		},
		adapter: adapter()
	}
}

export default config
