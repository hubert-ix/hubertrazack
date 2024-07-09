<script>
  export let label;
  export let value;
  export let style = "";
</script>


<div class="wrap {style}">
  <div class="label">
    {label}:
  </div>
  <div class="value">
    {value}
  </div>
</div>


<style>
  .wrap {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .label {
    width: 100px;
  }

  .value {
    opacity: 0.6;
  }

  .large .value {
    opacity: 1;
    font-size: 1.8rem;
    color: #b642d6;
    font-weight: 500;
  }
</style>