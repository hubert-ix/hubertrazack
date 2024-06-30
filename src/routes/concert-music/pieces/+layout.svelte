<script>
  import { fade } from "svelte/transition";
</script>


<section class="first" in:fade>
  <div class="container">
    <slot />
  </div>
</section>


<style>
  section {
    background: #fff;
    color: #000;
  }
</style>