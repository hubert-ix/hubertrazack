<script>
	export let condition = false;
	export let tag = 'a';
</script>


{#if condition && tag}
  <a {...$$restProps}><slot /></a>
{:else}
  <div {...$$restProps}><slot /></div>
{/if}


<style>
  a {
    text-decoration: none;
    transition: opacity 0.4s;
  }

  a:hover {
    opacity: 0.4;
  }
</style>