<script>
	import state from '$stores/state'
	export let name

	function open(ev) {
		const el = ev.target
		const bodyRect = document.querySelector('body').getBoundingClientRect()
		const rect = el.getBoundingClientRect()
		console.log('el', rect)
		el.style.inset = `${rect.top}px ${bodyRect.right - rect.right}px ${bodyRect.bottom - rect.bottom}px ${rect.left}px`
		el.style.transition = `top,right,bottom,left 0.5s ease-in-out`
		el.style.height = `auto`
		$state.menu.openItem = name
		setTimeout(() => {
			el.style.top = '4rem'
			el.style.left = '0'
			el.style.bottom = '0'
			el.style.right = '0'
		}, 100)
	}

	function close(ev) {
		ev.stopPropagation()
		const el = ev.target.parentNode.parentNode
		console.log('el', el)
		el.style.height = `8rem`
		$state.menu.openItem = ''
	}
</script>

<li on:click={ open } class="card h-32" class:open={$state.menu.openItem == name}>
	<div class="flex justify-between items-center">
		<div>{ name.charAt(0).toUpperCase() + name.slice(1) }</div>
		{#if $state.menu.openItem == name}
			<div on:click={ close }>X</div>
		{/if}
	</div>
	<slot/>
</li>

<style>
	/* .card {
		transition: all 2s ease-in-out;
	} */
	.open {
		@apply fixed rounded-tl-3xl rounded-tr-3xl;
	}
</style>