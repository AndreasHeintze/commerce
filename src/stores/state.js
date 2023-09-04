import { writable } from 'svelte/store'

export default writable({
	mainScrollPos: -1,
	menu: {
		isOpen: true,
		openItem: {},
		items: [
			{
				name: "info"
			},
			{
				name: "cart"
			}, {
				name: "news"
			},
			{
				name: "categories"
			},
			{
				name: "campaigns"
			},
			{
				name: "checkout"
			},
			{
				name: "contact"
			},
			{
				name: "blog"
			},
			{
				name: "my pages"
			},
			{
				name: "search"
			}
		]
	}
})
