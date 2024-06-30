<script>
  import InfoLine from "$lib/InfoLine.svelte";

  export let title;
  export let date;
  export let ensemble;
  export let duration;
</script>


<div class="back-button">
  <a href="/concert-music#choral">&lt; Back to projects</a>
</div>

<h2>{title}</h2>

<InfoLine label="Date" value={date} />
<InfoLine label="Ensemble" value={ensemble} />
<InfoLine label="Duration" value={duration} />

<slot />


<style>
  .back-button {
    margin-bottom: 1rem;
  }

  .back-button a {
    opacity: 0.5;
    text-decoration: none;
    color: #000;
  }

  h2 {
    color: #d09adf;
    border: none;
  }

  .description {
    margin-top: 2rem;
    margin-bottom: 3rem;
    max-width: 800px;
  }
</style>