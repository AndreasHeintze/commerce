<script>
	import state from '$stores/state';

	const fraction = new Intl.NumberFormat('sv-SE', {
		style: 'currency',
		currency: 'SEK',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
	const formatter = new Intl.NumberFormat('sv-SE', {
		style: 'currency',
		currency: 'SEK',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	function price(price) {
		if (price % 1 == 0) {
			price = fraction.format(price);
		} else {
			price = formatter.format(price);
		}
		return price;
	}

	export let data;

	$: console.log('data', data);
</script>

<div class="container m-auto">
	<h1>Start</h1>

	<ul class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#if data.products}
			{#each data.products as product}
				<li>
					<div class="relative overflow-hidden rounded-xl bg-white shadow-lg">
						<div class="flex h-64 items-center justify-center">
							<img src={product.imageUrl} class="h-full w-full object-cover" />
						</div>
						<div class="p-3">
							<h3 class="truncate" title={product.name}>{product.name}</h3>
							<div class="text-xs">Art.nr: {product.displayid}</div>
							<div class="mt-3">Pris: {price(product.price)}</div>
						</div>
					</div>
				</li>
			{/each}
		{/if}
	</ul>
	<!-- <pre>Categories:
		{ JSON.stringify(data.categories, null, 2) }
	</pre> -->

	<!-- <pre>Products:
		{ JSON.stringify(data.products, null, 2) }
	</pre> -->

	<div>{$state.mainScrollPos}</div>

	<p>
		<a href="/checkout">Till kassan</a>
	</p>
</div>

<style>
	li:nth-child(odd) > div {
		top: 20%;
	}
	li:nth-child(even) > div {
		top: 0;
	}
	/* li:nth-child(3n+0) > div {
		top: 20%;
	}
	li:nth-child(3n+1) > div {
		top: 0;
	}
	li:nth-child(3n+2) > div {
		top: -20%;
	} */
</style>
