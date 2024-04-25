<script>
  export let title;
  export let src;
</script>


<div class="item">
  <div class="item-title">{title}</div>
  <audio controls=false controlsList="nodownload"preload="auto">
    <source {src} type="audio/mpeg" />
  </audio>
</div>


<style>
  audio {
    width: 90%;
  }
</style>