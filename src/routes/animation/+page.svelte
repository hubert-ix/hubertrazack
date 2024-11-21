<script>
  import { fade } from "svelte/transition";
</script>


<div in:fade>
  <section class="small first">
    <div class="container">

      <h2>Scoring for animation</h2>
      <p>Disclaimer: I did not work on this film, this is a (really cool) deleted scene that I found on the internet and that had no music. Very fun to score to!</p>
      <iframe src="https://www.youtube.com/embed/dM0FUhJiGMU?si=BUddKYefrrvQw0Eq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

   </div>
  </section>
</div>


<style>
  iframe {
    aspect-ratio: 16 / 9;
    width: 80%;
  }

  @media only screen and (max-width: 800px) {
    iframe {
      width: 100%;
    }
  }
</style>