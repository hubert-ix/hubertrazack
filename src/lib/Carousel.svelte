<script>
	import Siema from 'siema'
	import { onMount, createEventDispatcher } from 'svelte'
	
	export let perPage = 1
	export let loop = true
	export let autoplay = 0
	export let duration = 500
	export let easing = 'ease-out'
	export let startIndex = 0
	export let draggable = true
	export let multipleDrag = true	
	export let dots = true	
	export let controls = true
	export let threshold = 20
	export let rtl = false
	let currentIndex = startIndex;
	
	let siema
	let controller
	let timer

	const dispatch = createEventDispatcher()

	$: pips = controller ? controller.innerElements : []
	$: currentPerPage = controller ? controller.perPage : perPage
	$: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []
	
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
      duration,
      easing,
      startIndex,
      draggable,
 			multipleDrag,
      threshold,
      rtl,
			onChange: handleChange,
      onInit: handleInit
		})
		
		if(autoplay) {
			timer = setInterval(right, autoplay);
		}

		return () => {
			autoplay && clearInterval(timer)
			controller.destroy()
		}
	})

	export function isDotActive (currentIndex, dotIndex) {
    if (currentIndex < 0) currentIndex = pips.length + currentIndex;
    return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
  }
	
	export function left () {
		controller.prev()
	}
	
	export function right () {
		controller.next()
	}

	export function go (index) {
		controller.goTo(index)
	}
	
	export function pause() {
		clearInterval(timer);
	}

	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}

	function handleChange (event) {
		currentIndex = controller.currentSlide

		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		} )
	}
  
  function handleInit(e) {
    dispatch("init");
  }
</script>


<div class="carousel">
	<div class="slides" bind:this={siema}>
		<slot />
	</div>
	{#if controls}
		<div class="controls">
			<button class="left" on:click={left} aria-label="left">
				<img src="/images/arrow-right.png" loading="lazy" alt="" width="80">
			</button>
			<button class="right" on:click={right} aria-label="right">
				<img src="/images/arrow-right.png" loading="lazy" alt="" width="80">
			</button>
		</div>
	{/if}
  {#if dots}
		<div class="dots">
			{#each {length: totalDots} as _, i}
				<div on:click={() => go(i*currentPerPage)} class=" dot {isDotActive(currentIndex, i)?'selected':''}"></div>
			{/each}
		</div>
  {/if}
</div>


<style>
	.carousel {
		position: relative;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.dots {
    display: flex;
    align-items: center;
    justify-content: left;
    padding-top: 20px;
  }

  .dot {
    width: 8px;
    height: 8px;
    background-color: rgba(34,34,34,0.4);
    border-radius: 50%;
    margin: 0 3px;
    cursor: pointer;
    transition: background-color 100ms,color 100ms;
  }

  .dot.selected {
    background-color: #000;
  }

	.controls {
    display: flex;
    justify-content: space-between;
    padding-top: 60px;
    position: absolute;
		width: 100%;
		top: 0;
  }

  .controls button {
    width: 4rem;
    height: 4rem;
    min-width: 4rem;
    border: none;
    justify-content: center;
    align-items: center;
    background: transparent;
    display: flex;
    top: 40px;
    right: 0;
    z-index: 3;
    user-select: none;
    margin: auto;
    position: absolute;
    cursor: pointer;
		opacity: 0.5;
  }

	.controls button.left {
    right: auto;
		left: 0;
		transform: rotate(180deg)
  }
  
  @media only screen and (max-width: 800px) {
		.carousel {
			padding-top: 50px;
			padding-bottom: 20px;
		}

		.controls {
			top: auto;
			bottom: 30px;
		}
  }
</style>