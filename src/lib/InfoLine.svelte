<script>
  export let label;
  export let value;
  export let style = "";
</script>


<div class="wrap {style}">

  {#if label}
    <div class="label">
      {label}:
    </div>
  {/if}

  <div class="value">
    {value}
  </div>

</div>


<style>
  .wrap {
    display: flex;
    align-items: center;
    margin-bottom: 0rem;
  }

  .label {
    width: 100px;
  }

  .value {
    opacity: 0.6;
  }

  .large .value {
    opacity: 1;
    font-size: 2rem;
    line-height: 1;
    color: rgb(221 141 54);
    font-weight: 500;
    margin-bottom: 1rem;
  }
</style>