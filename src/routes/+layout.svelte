<script>
	import '../app.css';
	import state from '$stores/state';
	import Menu from '$components/Menu.svelte';

	function initScroll(node) {
		const body = document.querySelector('body');
		node.scrollLeft = body ? body.offsetWidth : 320;
		$state.mainScrollPos = node.scrollLeft;

		function swipe(ev) {
			$state.mainScrollPos = ev.target.scrollLeft;
		}

		node.addEventListener('scroll', swipe)

		return {
			destroy() {}
		};
	}
</script>

<div
	use:initScroll
	class="flex snap-x snap-mandatory overflow-x-auto"
	class:invisible={$state.mainScrollPos === -1}
>
	<aside class="frosted-glass h-screen w-screen shrink-0 snap-center p-4">
		<Menu />
	</aside>

	<main class="h-screen w-screen shrink-0 snap-center px-4 py-0">
		<div class="h-full overflow-y-auto scroll-smooth">
			<slot />
		</div>
	</main>
</div>

<style>
	:global(body) {
		/* background: linear-gradient(140deg, #c5d2b9, #f2f8ed); */
		background: linear-gradient(140deg, #d6e8c5, #f2f8ed);
		/* background-image: url(/tips-to-keep-skin-soft-and-glowing.jpg); */
		/* background: linear-gradient(320deg, #e2e2e2, #ebeaef); */
		/* background: linear-gradient(320deg, #ebdbdb, #ffffff); */
		/* background-image: url(/vecteezy_abstract-boxes-background-modern-technology-with-square_8171873.jpg); */
		background-position: center;
		background-size: auto;
		background-position: right;
	}
	/* :global(body>div) {
		background-image: url(/kodmyran-commerce-logo.png);
		background-position: center;
		background-size:auto;
	} */
	aside {
		width: calc(100vw - 40px);
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
	}
</style>
