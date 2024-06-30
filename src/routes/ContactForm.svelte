<script>
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';
  import { fade } from 'svelte/transition';
  
  let finished = false;

  $: if ($page.form?.success) {
    finished = true;
  }
</script>


<div class="wrap">

  {#if !finished}
    <form method="POST" use:enhance>
      <div class="form-item">
        <input type="text" name="name" placeholder="Your name" required />
      </div>
      <div class="form-item">
        <input type="email" name="email" placeholder="Your email" required />
      </div>
      <div class="form-item">
        <textarea name="message" placeholder="Your message" required></textarea>
      </div>
      <input type="submit" value="Send" />
    </form>
  {:else}
    <p in:fade>Thank you for your message!</p>
  {/if}

</div>



<style>
  .wrap {
    margin-bottom: 2rem;
  }
  
  input, textarea {
    border: none;
    padding: 1rem;
    max-width: 600px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.8;
  }

  .form-item {
    margin-bottom: 1rem;
  }

  input[type="submit"] {
    padding: 0.5rem 2rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    background: rgb(221 141 54);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: opacity 0.4s;
  }

  input[type="submit"]:hover {
    opacity: 0.6;
  }
</style>