<script>
  import BurgerButton from '$lib/BurgerButton.svelte';
  import * as animateScroll from "svelte-scrollto";

  let mobile = false;

  function scrollTo(id) {
    animateScroll.scrollTo({element: '#' + id, duration: 0})
  }
</script>

<header id="home" class:mobile={mobile}>
  <div class="container full header">
    <div class="header-left">
      <BurgerButton on:clicked={() => mobile = !mobile} />
      <a on:click={() => scrollTo('home')}>Hubert Razack</a>
    </div>
    <div class="header-right" id="nav">
      <a on:click={() => scrollTo('home')}>Home</a>
      <a on:click={() => scrollTo('music')}>Demo reel</a>
      <a on:click={() => scrollTo('about')}>About</a>
      <a on:click={() => scrollTo('contact')}>Contact</a>
    </div>
  </div>
</header>


<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.9);
    padding: 20px 0;
    text-align: center;
    margin: auto;
    z-index: 10;
  }

  header a {
    color: #fff;
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1px;
    border-bottom: solid 1px transparent;
    padding-bottom: 4px;
    transition: border-color 0.4s;
    cursor: pointer;
  }

  header a:hover {
    border-color: #999;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .header-left {
    display: flex;
    grid-gap: 20px;
  }

  .header-left a {
    font-weight: 300;
    letter-spacing: 2px;
  }

  .header-right {
    position: relative;
  }

  .header-right a {
    margin-left: 40px;
  }

  header.mobile .header-right {
    position: absolute;
    display: block;
    top: 70px;
    left: 0;
    background: #000;
    width: 100%;
    padding-bottom: 15px;
  }

  

  @media only screen and (max-width: 700px) {
    .header-right a {
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    .header-right {
      display: none;
    }
  }
</style>