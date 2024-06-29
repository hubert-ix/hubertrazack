<script>
  import { enhance } from '$app/forms';
  import { ReCaptcha } from '@mac-barrett/svelte-recaptcha';

  let Captcha;
  let SITE_KEY = "6LccdQQqAAAAADMySBZzeKEpzVZy0eaCmADokblb";
  // 6LccdQQqAAAAAO1f9_j24IZ09zDGipASS_8Spx0r
</script>


<div class="wrap">
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
    <ReCaptcha bind:this={Captcha} { SITE_KEY } captchaStyle={{theme: 'dark', size: 'compact'}}/>
    <button>Send</button>
  </form>
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

  button {
    padding: 0.5rem 2rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.8;
    background: rgb(221 141 54);
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>