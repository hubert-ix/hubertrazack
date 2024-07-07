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
    position: relative;
  }

  .wrap::before {
    content: '';
    background: url(/images/quote-orange.png) no-repeat;
    background-size: 100%;
    position: absolute;
    width: 140px;
    height: 140px;
    left: -20px;
    top: -60px;
    opacity: 0.2;
  }

  .text {
    margin-bottom: 1rem;
    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
  }

  .author-name {
    color: rgb(221 141 54);
  }
</style>