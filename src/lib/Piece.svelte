<script>
  export let title;
  export let year;
  export let description;
  export let type;
</script>


<div class="wrap {type}">
  <h3>{title} <span class="year">({year})</span></h3>
  {description}
</div>


<style>
  .wrap {
    margin-bottom: 2rem;
  }
  
  span.year {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    letter-spacing: 0;
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
</style>