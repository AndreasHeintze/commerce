import { writable } from 'svelte/store'

export default writable({
	menu: {
		isOpen: true,
		openItem: '',
		items: ['info', 'cart', 'news', 'categories', 'campaigns', 'checkout', 'contact', 'blog']
	}
})
