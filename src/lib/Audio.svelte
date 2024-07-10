<script>
  export let title;
  export let src;
</script>


<div class="wrap">
  
  <audio controls=false controlsList="nodownload"preload="auto">
    <source {src} type="audio/mpeg" />
  </audio>

  <div class="title">
    {title}
  </div>

</div>


<style>
  .wrap {
    max-width: 600px;
    margin-bottom: 2rem;
  }

  audio {
    width: 100%;
  }

  .title {
    font-size: 0.9rem;
    opacity: 0.8;
    padding-left: 20px;
    color: rgb(221 141 54);
  }
</style>