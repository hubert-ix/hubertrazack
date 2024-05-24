<script>
  import { fade, slide } from "svelte/transition";
  import * as animateScroll from "svelte-scrollto";
  import PortfolioVideo from "$lib/PortfolioVideo.svelte";
  import Audio from "$lib/Audio.svelte";

  let showMore = false;

  function scrollTo(id) {
    animateScroll.scrollTo({element: '#' + id, duration: 0})
  }
</script>


<div in:fade>

  <section class="hero">
    <div class="hero-mobile">
      <img src="https://ik.imagekit.io/hubertrazack/hubert-razack2c.jpg?tr=w-1000&h-200" alt="Hubert Razack"/>
    </div>
    <div class="overlay"></div>
    <div class="overlay-content">
      <h1>Hubert Razack</h1>
      <div class="subtitle">Toronto-based Composer for Film, TV, and Media</div>
    </div>
    <div class="arrow-down">
      <div class="scroll" on:click={() => scrollTo('music')}>
        <img src="/images/arrow-down.png" width="70" height="50" alt="Scroll down" />
      </div>
    </div>
  </section>

  <section class="music" id="music">
    <div class="container">
      <h2>Music portfolio</h2>
      <iframe
        width="100%"
        height="700"
        scrolling="no"
        frameborder="no"
        src="https://play.reelcrafter.com/embed/0e594021-53aa-478b-88ad-8f1efb347c2d">
      </iframe>
    </div>
  </section>

  <section class="alt">
    <div class="container">
      <h2>Videos</h2>
      <div class="examples">
        <PortfolioVideo youtubeId="e7yMki4ROYg" title="Opening Theme for TV Show" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/beyond.jpg?updatedAt=1697912419952" />
        <PortfolioVideo youtubeId="4wU7_aJlteE" title="Soaring Romantic Theme" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/landscape.jpg?updatedAt=1697912420224" />
        <PortfolioVideo youtubeId="5r6BegBtxqw" title="Epic Fantasy Music" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/fantasy.jpg?updatedAt=1714072952209" />
        <!--<PortfolioVideo youtubeId="Uus5zIMDB-o" title="Other-wordly Electronic Soundscape" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/analog.jpg?updatedAt=1697912418168" />-->
        <PortfolioVideo youtubeId="53-c90ccqo0" title="Action Scene" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/action.jpg?updatedAt=1714073060773" />
        <PortfolioVideo youtubeId="dM0FUhJiGMU" title="Music for animation/cartoon" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/monsters2.jpg?updatedAt=1714072979197" />
        <!--<PortfolioVideo youtubeId="OHQ9dOduiig" title="Irish Dance Show Premiered in Mexico City" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/rose.jpg?updatedAt=1697912419894" />
        <PortfolioVideo youtubeId="pSkJMl8-MNU" title="Fantasy Atmospheric Ambiance" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/inspirium.jpg?updatedAt=1697912419829" />-->
      </div>
    </div>
  </section>
    
  <section class="about" id="about">
    <div class="container flex">
      <div class="left">
        <h2>About Hubert Razack</h2>
        <p>Hubert Razack is a Toronto based composer for film, TV, and media. He has been involved in the music industry for the best part of two decades. Born and trained classically in France, he moved in London, UK, to pursue a music career and produced a number of artists as well as his own projects.</p>
        <p>Relocated in Toronto since 2006, he has composed music for media, concert series, and live shows, as well as continuing his music production business. He completed a post-graduate music composition course at Humber college in 2024.</p>
        <p>Now focusing on his media composition work and on helping filmmakers fulfill their vision, Hubert is also an accomplished tenor and can be found performing in and around Toronto.</p>
        <p>You can find out more about Hubert's many projects at <a href="https://www.livingmelody.com" target="new">www.livingmelody.com</a></p>
      </div>
      <div class="right">
        <img src="https://ik.imagekit.io/hubertrazack/hubert-razack3.jpg?tr=w-600" alt="Hubert Razack" />
      </div>
    </div>
  </section>

  <section class="alt contact" id="contact">
    <div class="container">
      <h2>Contact</h2>
      <div class="contact-icons">
        <a href="mailto:razack.hubert@gmail.com" target="new"><img src="/images/email.png" alt="email" width="80" height="80" /></a>
        <a href="https://www.instagram.com/hubert.razack" target="new"><img src="/images/instagram.png" alt="Instagram" width="80" height="80" /></a>
        <a href="https://www.facebook.com/hubert.razack" target="new"><img src="/images/facebook.png" alt="Facebook" width="80" height="80" /></a>
        <a href="https://www.youtube.com/@hubertrazack" target="new"><img src="/images/youtube.png" alt="YouTube" width="80" height="80" /></a>
        <a href="https://open.spotify.com/artist/2nGBIJVBQDAVBjfFivmfgB" target="new"><img src="/images/spotify.png" alt="Spotify" width="80" height="80" /></a>
        <a href="https://music.apple.com/ca/artist/hubert-razack/1054303465" target="new"><img src="/images/apple.png" alt="Apple Music" width="80" height="80" /></a>
      </div>
    </div>
  </section>

</div>


<style>
  h1 {
    color: #000;
  }

  section.hero {
    position: relative;
    /*height: 100%;*/
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #000 url(https://ik.imagekit.io/hubertrazack/hubert-razack2c.jpg?updatedAt=1716524467747) no-repeat;
    background-size: cover;
    background-position: 0 0;
    z-index: 1;
    padding: 0;
  }

  .hero-mobile {
    display: none;
  }

  .overlay-content {
    position: relative;
    z-index: 3;
  }

  .arrow-down {
    z-index: 3;
    position: absolute;
    bottom: 40px;
    opacity: .8;
  }

  .overlay {
    position: absolute;
    /*background: rgba(19, 24, 29, .6);*/
    background: linear-gradient(to left,rgba(19, 24, 29, 0.5),rgba(19, 24, 29, 0.3), rgba(255,255,255,0));
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    z-index: 2;
  }

  .about p {
    max-width: 800px;
  }

  .about img {
    width: 400px;
  }

  .examples {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  @media only screen and (max-width: 1300px) {
    section.hero {
      height: 600px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .examples {
      grid-template-columns: 1fr 1fr;
    }

  }

  @media only screen and (max-width: 800px) {
    section.hero {
      height: 500px;
    }

    .arrow-down {
      display: none;
    }
  }

  @media only screen and (max-width: 700px) {
    .examples {
      grid-template-columns: 1fr;
    }

    .contact-icons img {
      width: 50px;
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    .about img {
      width: 100%;
    }

    .contact-icons img {
      width: 40px;
      margin-right: 10px;
    }
  }
</style>