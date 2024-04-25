<script>
  import { createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  const dispatch = createEventDispatcher();
  export let title = null;
  export let style = "";
  export let showCloseButton = true;
  
  function close() {
    dispatch("close");
  }
  
  function sendShowEvent() {
    dispatch("show");
  }
</script>


<div class="modal-backdrop" transition:fade on:introend={sendShowEvent}>

  <div class="modal {style}" transition:fly={{y: 300}}>
  
    {#if title}
      <h1>{title}</h1>
    {/if}
    
    <slot />
    
    {#if showCloseButton}
      <button on:click|preventDefault={close} class="close" />
    {/if}

  </div>

</div>


<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
    display: grid;
    place-items: center;
  }

  .modal {
    position: relative;
    width: 90%;
    max-width: 850px;
    max-height: 80vh;
    background: transparent;
    z-index: 100;
    padding: 2rem 0;
  }
  
  .close {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 0;
    border: none;
    outline: none;
    background: url(/images/icon-close-white.png) no-repeat;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
</style>