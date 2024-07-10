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

<h2>{title}</h2>

<div class="info">
  <InfoLine label="Date" value={date} />
  <InfoLine label="Ensemble" value={ensemble} />
  <InfoLine label="Duration" value={duration} />
</div>

<slot />


<style>
  h2 {
    color: rgb(221 141 54);
    border: none;
    margin-bottom: 2rem;
  }

  .back-button {
    margin-bottom: 2rem;
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
    padding-left: 1rem;
    border-left: solid 2px rgb(243, 202, 158);
  }
</style>