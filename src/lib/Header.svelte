<script>
  import BurgerButton from '$lib/BurgerButton.svelte';

  let mobile = false;
</script>

<header id="home" class:mobile={mobile}>
  <div class="container full header">
    <div class="header-left">
      <BurgerButton on:clicked={() => mobile = !mobile} />
      <a href="/" class="main">Hubert <span>Razack</span></a>
    </div>
    <div class="header-right" id="nav" on:click={() => mobile = false}>
      <a href="/#music">Film scoring</a>
      <a href="/stage">Stage & concert</a>
      <a href="/singing">Singing</a>
      <a href="/#about">About</a>
      <a href="/#contact">Contact</a>
    </div>
  </div>
</header>


<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.8);
    padding: 20px 0;
    text-align: center;
    margin: auto;
    z-index: 10;
    border-bottom: solid 2px #2c2c2c;
  }

  header a {
    color: #fff;
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1px;
    border-bottom: solid 1px transparent;
    transition: border-color 0.4s;
    cursor: pointer;
  }

  header a.main {
    font-size: 1.1rem;
  }

  header a span {
    color: rgb(221 141 54);
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
    align-items: center;
    grid-gap: 20px;
  }

  .header-left a {
    font-weight: 300;
    letter-spacing: 2px;
  }

  .header-right {
    display: flex;
    align-items: center;
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

  @media only screen and (max-width: 800px) {
    .header-right {
      display: none;
    }

    .header-right a {
      display: block;
      margin-left: 20px;
      padding: 0.5rem;
    }
  }
</style>