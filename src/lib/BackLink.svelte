<script>
  export let url;
</script>


<div class="backlink">
  <a href={url} class="backlink">
    <img src="/images/back-arrow-white.png" width="14" alt="Back" />
  </a>
</div>


<style>
  a.backlink {
    display: flex;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #212121;
    background-color: rgb(221 141 54);
    transition: opacity .4s;
  }

  a.backlink:hover {
    opacity: 0.6;
  }
</style>