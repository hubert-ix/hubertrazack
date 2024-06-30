<script>
    import ConditionalLink from "./ConditionalLink.svelte";

  export let title;
  export let year;
  export let type;
  export let ensemble;
  export let slug;
</script>


<ConditionalLink class="wrap {type}" href="/concert-music/pieces/{slug}" condition={slug}>
  <h3>{title} <span class="year">({year})</span></h3>
  {#if ensemble}
    <div class="ensemble">
      {ensemble}
    </div>
  {/if}
  <div class="description">
    <slot />
  </div>
</ConditionalLink>


<style>
  span.year {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    letter-spacing: 0;
  }

  .ensemble {
    color: #fff;
  }

  .description {
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.9;
    opacity: 0.7;
  }
</style>