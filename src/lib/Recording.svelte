<script>
  export let title;
  export let thumbnailURL;

  thumbnailURL += '&tr=w-300';
</script>


<div class="wrap">
  <div class="image">
    <img src={thumbnailURL} width="100" alt={title} />
  </div>
  <div class="info">
    <h3>{title}</h3>
    <slot />
  </div>
</div>


<style>
  .wrap {
    display: flex;
    grid-gap: 1rem;
  }

  h3 {
    color: #eab58c;
  }
</style>