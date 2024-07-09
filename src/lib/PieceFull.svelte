<script>
  import InfoLine from "$lib/InfoLine.svelte";
  import BackLink from "$lib/BackLink.svelte";

  export let title;
  export let date;
  export let ensemble;
  export let duration;
</script>


<div class="back-button">
  <BackLink url="/concert-music" />
  <a href="/concert-music#choral">Back to projects</a>
</div>

<div class="info">
  <InfoLine label="Title" value={title} style="large" />
  <InfoLine label="Date" value={date} />
  <InfoLine label="Ensemble" value={ensemble} />
  <InfoLine label="Duration" value={duration} />
</div>

<slot />


<style>
  .back-button {
    margin-bottom: 1rem;
    display: flex;
    grid-gap: 0.5rem;
    align-items: center;
  }

  .back-button a {
    opacity: 0.6;
    text-decoration: none;
    color: #000;
  }

  .info {
    padding-top: 1rem;
  }
</style>