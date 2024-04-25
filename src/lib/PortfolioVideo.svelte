<script>
  import Modal from '$lib/Modal.svelte';

  export let title;
  export let youtubeId;
  export let thumbnailURL;

  let showPopup = false;
</script>


<div class="example youtube-link" youtubeid={youtubeId} on:click={() => showPopup = true}>
  <div class="background" style="background-image: url({thumbnailURL})"></div>
  <div class="legend">
    <img src="/images/play.png" width="60" height="60" alt="Play video" />
    {title}
  </div>
</div>

{#if showPopup}
  <Modal on:close={() => showPopup = false}>
    <iframe src="https://www.youtube.com/embed/{youtubeId}?rel=0&wmode=transparent&autoplay=1&iv_load_policy=3" {title} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </Modal>
{/if}


<style>
  .example {
    position: relative;
    overflow: hidden;
  }

  .example .background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform .4s ease, filter .4s ease;
    height: 200px;
  }

  .example .legend {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-gap: 15px;
    opacity: 0;
    transition: opacity .3s ease;
    filter: brightness(0) invert(1);
    cursor: pointer;
    text-align: center;
  }

  .example:hover .background {
    transform: scale(1.2);
    filter: brightness(30%);
  }

  .example:hover .legend {
    opacity: 1;
  }

  iframe {
    width: 100%;
    height: 480px;
    box-shadow: 0px 0px 8px 0px rgba(255,255,255,0.4);
  }
</style>