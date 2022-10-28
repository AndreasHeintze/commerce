<script>
	import state from '$stores/state'
	import MenuItem from '$components/MenuItems.svelte'
	import AnimatedHamburger from '$components/AnimatedHamburger.svelte'

	function toggleMenu() {
		$state.menu.isOpen = !$state.menu.isOpen
	}
</script>

{#if $state.menu.isOpen}
<nav class="top-4 left-0 right-0 bottom-0 px-4 pb-4 scroll-smooth overflow-auto">
	
	<div class="card h-16 mb-4">
		Search
	</div>
	
	<menu class="grid grid-cols-2 auto-rows-min gap-4">
		{#each $state.menu.items as item}
		<MenuItem name={item}></MenuItem>
		{/each}
	</menu>
	
</nav>
{/if}

<!-- <div on:click={ toggleMenu } class="fixed top-6 right-6 bg-blue-500 text-white flex items-center justify-center w-14 h-14 rounded-full shadow-lg">
	<AnimatedHamburger />
</div> -->
