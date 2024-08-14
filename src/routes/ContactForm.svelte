<script>
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';
  import { fade } from 'svelte/transition';
  import { PUBLIC_RECAPTCHA_KEY } from '$env/static/public';
  
  let finished = false;
  let token;

  // $page.form.success is populated by +page.server.js after we submit the form
  $: if ($page.form?.success) {
    finished = true;
  }

  const onSubmit = event => {
    if (token == null) {
      event.cancel();
      grecaptcha.ready(async () => {
        token = await grecaptcha.execute(key, { action: 'submit' });
        setTimeout(() => event.formElement.requestSubmit());
      });
      return;
    }
    event.formData.append('token', token);
  };
</script>


<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js?render={PUBLIC_RECAPTCHA_KEY}" async defer></script>
</svelte:head>

<div class="wrap">

  {#if !finished}
    <form method="POST" use:enhance={onSubmit}>
      <div class="form-item">
        <input type="text" name="name" placeholder="Your name" value="H" required />
      </div>
      <div class="form-item">
        <input type="email" name="email" placeholder="Your email" value="hubert@livingmelody.com" required />
      </div>
      <div class="form-item">
        <textarea name="message" placeholder="Your message" value="m" required></textarea>
      </div>
      <input type="submit" value="Send"  />
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
    width: auto;
  }

  input[type="submit"]:hover {
    opacity: 0.6;
  }
</style>