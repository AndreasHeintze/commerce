<script>
	import Menu from '$components/Menu.svelte'

	let scrollPos = false

	function initScroll(node) {
		const body = document.querySelector('body')
		node.scrollLeft = body ? body.offsetWidth : 320
		scrollPos = node.scrollLeft
		
		function swipe(ev) {
			scrollPos = ev.target.scrollLeft
		}

		node.addEventListener("scroll", swipe)
		
		return {
			destroy() {}
		}
	}
</script>

<div use:initScroll class="flex snap-mandatory snap-x overflow-x-auto" class:invisible={scrollPos === false}>
	<aside class="w-screen h-screen p-4 snap-center shrink-0">
		<Menu/>
	</aside>
	
	<main class="w-screen p-4 snap-center shrink-0">
		<h1>Start</h1>
		
		<dl>
			<dt>Length</dt>
			<dd>2.3 m</dd>
			<dt>Weight</dt>
			<dd>4 tonnes</dd>
			<dt>Scroll position</dt>
			<dd>{ scrollPos }</dd>
		</dl>

		<p>
			<a href="/checkout">Till kassan</a>
		</p>
	</main>
</div>

<style>
	aside {
		width: calc(100vw - 40px);
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
	}
</style>