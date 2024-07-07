<script>
  export let text;
  export let authorName;
  export let authorTitle;
</script>


<div class="wrap">
  <div class="text">
    {text}
  </div>
  <div class="author">
    <span class="author-name">
      {authorName}
    </span>
    <span class="author-title">
      {authorTitle}
    </span>
  </div>
</div>


<style>
  .wrap {
    max-width: 800px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .text {
    margin-bottom: 1rem;
  }

  .author-name {
    color: rgb(221 141 54);
  }
</style>