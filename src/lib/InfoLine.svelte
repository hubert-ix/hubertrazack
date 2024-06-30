<script>
  export let label;
  export let value;
</script>


<div class="wrap">
  <div class="label">
    {label}
  </div>
  <div class="value">
    {value}
  </div>
</div>


<style>
  .wrap {
    display: flex;
    margin-bottom: 0.5rem;
  }

  .label {
    width: 100px;
  }

  .value {
    opacity: 0.6;
  }
</style>