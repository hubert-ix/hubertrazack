<script>
  export let title;
  export let year;
  export let type;
  export let ensemble;
</script>


<div class="wrap {type}">
  <h3>{title} <span class="year">({year})</span></h3>
  {#if ensemble}
    <div class="ensemble">
      {ensemble}
    </div>
  {/if}
  <div class="description">
    <slot />
  </div>
</div>


<style>
  span.year {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    letter-spacing: 0;
  }

  .ensemble {
    color: #aaa;
  }

  .orchestra h3 {
    color: #eab58c;
  }

  .choral h3 {
    color: #d09adf;
  }

  .vocal h3 {
    color: #bde297;
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.9;
  }
</style>