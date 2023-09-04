export async function load() {
	function goFetch(commandlist) {
		return fetch(`https://dev-andreas.shop4sale.se/headless`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-Api-Key': '17c6972a0ee97810087d852f18cfcc5c77299da2'
			},
			body: JSON.stringify({ request: { commandlist } })
		})
    .then((res) => res.json())
    .catch((err) => {
      console.error(err)
    })
	}

	function addCommand(verb, args) {
		commandlist.push({
			verb,
			arguments: args
		});
	}

	let commandlist = [];
	addCommand('getcategories', { parentid: 0 }),
	addCommand('getcategorycontent', { categoryid: 3115, offset: 0 });
	let data = await goFetch(commandlist);
	// console.log("🚀 ~ file: +page.server.js:26 ~ load ~ data", data.response)
	const [categories, products] = data.response;

	commandlist = [];
	products.data[0].forEach((item) => {
		commandlist.push({
			verb: 'getproductimage',
			arguments: {
				prodno: item.prodno,
				slot: 3
			}
		});
	});
	data = await goFetch(commandlist);
	const urls = data.response;
	// console.log('urls', urls)

	products.data[0].forEach((item, index) => {
		item.imageUrl = unescape(urls[index].data.url);
	});

	// console.log('products', products)
	// console.log('categories', categories)

	return {
		categories: categories.data,
		products: products.data[0]
	};
}
