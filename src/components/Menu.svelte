<script>
	import state from '$stores/state'
	import MenuItem from '$components/MenuItems.svelte'
	import AnimatedHamburger from '$components/AnimatedHamburger.svelte'

	function toggleMenu() {
		$state.menu.isOpen = !$state.menu.isOpen
	}
</script>

<div on:click={ toggleMenu } class="flex items-center justify-center w-14 h-12">
	<AnimatedHamburger />
</div>

{#if $state.menu.isOpen}
	<div class="fixed top-16 left-0 right-0 bottom-0 px-4 pb-4 scroll-smooth overflow-auto">

		<div class="card h-16 mb-4">
			Search
		</div>

		<div class="grid grid-cols-2 auto-rows-min gap-4">
			{#each $state.menu.items as item}
				<MenuItem name={item}></MenuItem>
			{/each}
		</div>

	</div>
{/if}
