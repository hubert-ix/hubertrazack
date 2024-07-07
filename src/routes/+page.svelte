<script>
  import { fade } from "svelte/transition";
  import * as animateScroll from "svelte-scrollto";
  import PortfolioVideo from "$lib/PortfolioVideo.svelte";
  import Testimonial from "$lib/Testimonial.svelte";
  import ContactForm from "./ContactForm.svelte";

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
      <h1>Hubert <span>Razack</span></h1>
      <div class="subtitle">Composer for stage, Film/TV, and Media</div>
    </div>
    <div class="arrow-down">
      <div class="scroll" on:click={() => scrollTo('music')}>
        <img src="/images/arrow-down.png" width="70" height="50" alt="Scroll down" />
      </div>
    </div>
  </section>

  <section class="music" id="music">
    <div class="container">
      <h2>Music Portfolio</h2>
      <iframe
        title="player"
        width="100%"
        height="700"
        scrolling="no"
        frameborder="no"
        src="https://play.reelcrafter.com/embed/0e594021-53aa-478b-88ad-8f1efb347c2d">
      </iframe>
    </div>
  </section>

  <!--
  <section class="alt">
    <div class="container">
      <h2>Videos</h2>
      <div class="examples">
        <PortfolioVideo youtubeId="e7yMki4ROYg" title="Opening Theme for TV Show" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/beyond.jpg?updatedAt=1697912419952" />
        <PortfolioVideo youtubeId="4wU7_aJlteE" title="Soaring Romantic Theme" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/landscape.jpg?updatedAt=1697912420224" />
        <PortfolioVideo youtubeId="dM0FUhJiGMU" title="Music for animation/cartoon" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/monsters2.jpg?updatedAt=1714072979197" />
      </div>
    </div>
  </section>
  -->

  <section class="testimonials">
    <div class="container">
      <div class="testimonials">
        <Testimonial authorName="Caroline Colantonio" authorTitle="Singer/songwriter" text="Hubert was enthusiastic and encouraging from our very first creative meeting. Not only did he have a wealth of original ideas for every one of my songs, but he also approached every decision with a masterful perspective of my record as a whole. His care, patience, and precision are exceptional and his passion for his work greatly elevated my confidence as a young artist." />
        <Testimonial authorName="Emiko Hsuen" authorTitle="Director/producer" text="Hubert ranks in first place in terms of the expertise, flexibility, customized attention and genuine interest accorded to each recording experience. The quality of the end product is top notch!" />
        <Testimonial authorName="Francesca Blandizzi" authorTitle="Singer/songwriter" text="The process from beginning to end was smooth, safe, clear, flowing, positive, creatively charged, inspiring, joyful and customized to how I work best. Hubert's extensive background in music production, playing multiple instruments and being professionally trained as a singer has helped me immensely to take my singing, harmonies and songwriting to a new level." />
      </div>
    </div>
  </section>
    
  <section class="about alt" id="about">
    <div class="container flex">
      <div class="left">
        <h2>About Hubert</h2>
        <p>Hubert Razack is a composer for film, TV, and stage based in Toronto. He composed the soundtrack for <strong>The Boy Who Became a Legend</strong>, a kungfu stage production by Shaolin Wahnam Canada which was later adapted into a short film.  He wrote the theme music for the modern classical <strong>OriginL</strong> concert series, and was commissioned to create the music for the Irish dance show <strong>Once Upon a Rose</strong> which premiered in Mexico City by Bradigan Dance. He is a regular contributor to trailer music and production music libraries.</p>
        <p>A versatile musician and collaborator with over 20 years of diverse music experience, Hubert's electronic project Esthesia has received airplay throughout Canada, and as a music producer he has produced records and played for several independent artists including UK-based rock band <strong>The Audio Journal</strong> and Canadian singer songwriter <strong>Caroline Colantonio</strong>. Classically-trained in France, Hubert has performed as a tenor  in several operas, oratorios, and recitals in the Toronto area, and has written many classical works that are internationally performed.</p>
        <p>Hubert completed a post-graduate music composition course with honours at Humber College. His teachers included renowned composer Kevin Lau and orchestrator Rebecca Pellet. He is a member of the Screen Composers Guild of Canada and resides in Toronto where he enjoys practicing and teaching the art of Chi Kung.</p>
      </div>
      <div class="right">
        <img src="https://ik.imagekit.io/hubertrazack/hubert-razack3.jpg?tr=w-600" alt="Hubert Razack" />
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="container">
      <h2>Contact</h2>
      <div class="contact-grid">
        <ContactForm />
        <div class="contact-icons">
          <a href="mailto:razack.hubert@gmail.com" target="new"><img src="/images/email.png" alt="email" width="80" height="80" /></a>
          <a href="https://www.instagram.com/hubert.razack" target="new"><img src="/images/instagram.png" alt="Instagram" width="80" height="80" /></a>
          <a href="https://www.facebook.com/hubert.razack" target="new"><img src="/images/facebook.png" alt="Facebook" width="80" height="80" /></a>
          <a href="https://www.youtube.com/@hubertrazack" target="new"><img src="/images/youtube.png" alt="YouTube" width="80" height="80" /></a>
          <a href="https://open.spotify.com/artist/2nGBIJVBQDAVBjfFivmfgB" target="new"><img src="/images/spotify.png" alt="Spotify" width="80" height="80" /></a>
          <a href="https://music.apple.com/ca/artist/hubert-razack/1054303465" target="new"><img src="/images/apple.png" alt="Apple Music" width="80" height="80" /></a>
        </div>
      </div>
    </div>
  </section>

</div>


<style>
  h1 {
    color: #000;
  }

  h1 span {
    color: rgb(149 72 10);
  }

  .subtitle {
    font-family: 'Dosis', sans-serif;
    color: #eee;
    font-size: 1.43rem;
    letter-spacing: 1px;
  }

  section.hero {
    position: relative;
    /*height: 100%;*/
    height: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /*
    background: #000 url(https://ik.imagekit.io/hubertrazack/hubert-razack2c.jpg?updatedAt=1716524467747) no-repeat;
    background-size: cover;
    background: #000 url(/images/hubert-test.jpg) no-repeat;
    background-size: 577px 777px;
    background: radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(0,0,0,1) 100%, rgba(52,53,54,1) 100%);
    */
    background: #000 url(https://ik.imagekit.io/hubertrazack/hubert-razack4a.jpg?updatedAt=1717369192272) no-repeat;
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

  section.testimonials {
    padding-top: 0;
  }

  div.testimonials {
    display: grid;
    grid-gap: 4rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }

  .contact-icons {
    max-width: 400px;
  }

  .contact-icons img {
    min-width: 80px;
    margin-right: 30px;
    filter: grayscale(40%);
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1600px) {
    section.hero {
      height: 800px;
    }
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

    .contact-grid {
      grid-template-columns: 1fr;
    }

  }

  @media only screen and (max-width: 800px) {
    section.hero {
      height: 500px;
      margin-top: 75px;
    }

    section.music {
      padding-bottom: 0;
    }

    section.music .container {
      padding: 0;
    }

    section.music h2 {
      margin-left: 24px;
    }

    .arrow-down {
      display: none;
    }
  }

  @media only screen and (max-width: 700px) {
    .overlay-content {
      position: absolute;
      right: 50px;
      top: 100px;
      text-align: right;
    }

    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }
    
    .examples {
      grid-template-columns: 1fr;
    }

    .contact-icons img {
      width: 50px;
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    .overlay-content {
      width: 200px;
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