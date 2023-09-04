<script>
	import state from '$stores/state';
	import MenuItem from '$components/MenuItem.svelte';
	// import AnimatedHamburger from '$components/AnimatedHamburger.svelte';

	// function toggleMenu() {
	// 	$state.menu.isOpen = !$state.menu.isOpen
	// }

	$: {
		if (!$state.menu.isOpen && $state.mainScrollPos != 365) {
			$state.menu.isOpen = true
		}
		if ($state.menu.isOpen && $state.mainScrollPos == 365) {
			$state.menu.isOpen = false
		}
	}
</script>

{#if $state.menu.isOpen}
	<nav class="flex flex-col justify-end h-full overflow-y-auto scroll-smooth">
		<ul class="grid auto-rows-min grid-cols-2 gap-4">
			{#each $state.menu.items as item}
				<MenuItem {item} />
			{/each}
		</ul>
	</nav>
{/if}

<!-- <div on:click={ toggleMenu } class="fixed top-6 right-6 bg-blue-500 text-white flex items-center justify-center w-14 h-14 rounded-full shadow-lg">
	<AnimatedHamburger />
</div> -->
