<script>
	import state from '$stores/state'
	import tmp from '$stores/tmp'

	/** @type {object} */
	 export let item

	 /**
	 * @param {{}} obj
	 */
	 function isEmpty(obj) {
		 return Object.keys(obj).length === 0
	 }

	/**
	 * @param {{ key: string; }} ev
	 */ 
	function openByKey(ev) {
		console.log(`openByKey  ev:`, ev)
		if (ev.key != 'space') {
			return
		}	
	}	

	function open(ev) {
		if ($state.menu.openItem === item) {
			return
		}
		if (!isEmpty($state.menu.openItem)) {
			close()
		}

		$tmp.menuOpenEl = this

		const wrapperEl = $tmp.menuOpenEl.parentNode.parentNode.parentNode
		const buttonRect = $tmp.menuOpenEl.getBoundingClientRect()
		const wrapperRect = wrapperEl.getBoundingClientRect()

		buttonRect.x2 = buttonRect.x + buttonRect.width
		buttonRect.y2 = buttonRect.y + buttonRect.height
		wrapperRect.x2 = wrapperRect.x + wrapperRect.width
		wrapperRect.y2 = wrapperRect.y + wrapperRect.height

		const topDiff = wrapperRect.y - buttonRect.y
		const rightDiff = buttonRect.x2 - wrapperRect.x2
		const bottomDiff = buttonRect.y2 - wrapperRect.y2
		const leftDiff = wrapperRect.x - buttonRect.x

		$tmp.menuOpenElInset = getComputedStyle($tmp.menuOpenEl).inset
		
		$tmp.menuOpenEl.style.top = `${topDiff}px`
		$tmp.menuOpenEl.style.left = `${leftDiff}px`
		$tmp.menuOpenEl.style.bottom = `${bottomDiff}px`
		$tmp.menuOpenEl.style.right = `${rightDiff}px`
		
		$state.menu.openItem = item
	}

	function close(ev) {
		if (typeof ev.key != 'undefined') {
			if (ev.key !== 'Escape') {
				return
			}
		}
		if (!$state.menu.openItem) {
			return
		}
		if (ev) {
			ev.stopPropagation()
		}
		$tmp.menuOpenEl.style.inset = $tmp.menuOpenElInset
		$state.menu.openItem = {}
		$tmp.menuOpenEl = false
		$tmp.menuOpenElInset = false
	}
</script>

<svelte:window on:keyup={close} />

<li class="relative h-32">
	<div on:click={open} on:keyup={openByKey} class="card absolute inset-0 shadow-sm transition-all duration-300 bg-primary focus:border-2 focus:border-solid focus:border-red-600" class:open={$state.menu.openItem === item}>
		<div class="flex items-center justify-between">
			<div>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
			{#if $state.menu.openItem === item}
				<div on:click={close}>X</div>
			{/if}
		</div>
		<slot />
	</div>
</li>

<style>
	/* .card {
		transition: all 2s ease-in-out;
	} */
	.open {
		/* @apply fixed rounded-tl-3xl rounded-tr-3xl; */
		@apply z-10;
		/* top: -81px;
		right: -200px;
		bottom: -100px; */
		/* top: 0;
		right: 0;
		bottom: 0;
		left: 0; */
	}
</style>
