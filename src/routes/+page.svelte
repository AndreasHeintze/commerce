<script>
	let scrollPos = false

	function initScroll(node) {
		const body = document.querySelector('body')
		node.scrollLeft = body ? body.offsetWidth : 320
		scrollPos = node.scrollLeft

		node.addScrollEvent()
		
		return {
			destroy() {}
		}
	}
</script>

<div use:initScroll class="flex snap-mandatory snap-x overflow-x-auto" class:invisible={scrollPos === false}>
	<aside class="w-screen h-screen p-4 snap-center shrink-0">
		<h1 class="text-red-500">Kodmyran Headless Commerce</h1>
	</aside>
	
	<main class="w-screen p-4 snap-center shrink-0">
		<dl>
			<dt>Length</dt>
			<dd>2.3 m</dd>
			<dt>Weight</dt>
			<dd>4 tonnes</dd>
			<dt>Scroll position</dt>
			<dd>{ scrollPos }</dd>
		</dl>
	</main>
</div>

<style>
	aside {
		width: calc(100vw - 40px);
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
	}
</style>