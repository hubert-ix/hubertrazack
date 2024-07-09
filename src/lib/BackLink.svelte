<script>
  export let url;
</script>


<div class="backlink">
  <a href={url} class="backlink">
    <img src="/images/back-arrow-black.png" width="14" alt="Back" />
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
    background-color: #ddd;
    transition: background-color .4s;
  }

  a.backlink:hover {
    opacity: 1;
    background-color: #bdbdbd;
  }
</style>