<script>
  import { fade } from "svelte/transition";
  import * as animateScroll from "svelte-scrollto";
  import PortfolioVideo from "$lib/PortfolioVideo.svelte";
  import Testimonial from "$lib/Testimonial.svelte";
  import ContactForm from "./ContactForm.svelte";
  import Carousel from "../lib/Carousel.svelte";

  function scrollTo(id) {
    animateScroll.scrollTo({element: '#' + id, duration: 0})
  }
</script>


<div in:fade>

  <section class="hero">
    <div class="hero-inside">
      <div class="hero-image"></div>
      <div class="hero-content">
        <h1>Hubert <span>Razack</span></h1>
        <div class="subtitle">Composer for stage, Film/TV, and Media</div>
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

  <section class="testimonials">
    <div class="container">
      <Carousel>
        <Testimonial authorName="Spencer Litzinger" authorTitle="Director" text="I had the absolute pleasure of working with Hubert on two projects. The music he created went beyond my expectations. The sound is brilliant and adds so much to the scenes. I remember hearing it for the first time and just yelling 'this is PERFECT!' I highly recommend working with him." />
        <Testimonial authorName="Christine Javier" authorTitle="Director" text="I had the pleasure of working with Hubert as the music composer for my short film, and he did an exceptional job. He was incredibly easy to communicate with, always responsive, and took direction seamlessly. Hubert truly understood the vision I had for the project and brought it to life through his music. I would not hesitate to collaborate with him again on future projects." />
        <Testimonial authorName="Maher El Hares" authorTitle="Creator. Producer. Whatever." text="'Holy shit. Ugh it's soo good - jeez - friggin rights he nailed it!'. This was my reaction when first hearing Hubert's music for our movie. It's so nice to work with someone who actually understands the assignment." />
        <Testimonial authorName="Emiko Hsuen" authorTitle="Director/producer" text="Hubert ranks in first place in terms of the expertise, flexibility, customized attention and genuine interest accorded to each recording experience. The quality of the end product is top notch!" />
        <Testimonial authorName="Caroline Colantonio" authorTitle="Singer/songwriter" text="Hubert was enthusiastic and encouraging from our very first creative meeting. Not only did he have a wealth of original ideas for every one of my songs, but he also approached every decision with a masterful perspective of my record as a whole. His care, patience, and precision are exceptional and his passion for his work greatly elevated my confidence as a young artist." />
      </Carousel>
    </div>
  </section>

  <!--
  <section class="alt">
    <div class="container">
      <h2>Videos</h2>
      <div class="examples">
        <PortfolioVideo youtubeId="dM0FUhJiGMU" title="Music for animation/cartoon" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/monsters2.jpg?updatedAt=1714072979197" />
        <PortfolioVideo youtubeId="e7yMki4ROYg" title="Opening Theme for TV Show" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/beyond.jpg?updatedAt=1697912419952" />
        <PortfolioVideo youtubeId="4wU7_aJlteE" title="Soaring Romantic Theme" thumbnailURL="https://ik.imagekit.io/hubertrazack/examples/landscape.jpg?updatedAt=1697912420224" />
      </div>
    </div>
  </section>
  -->

  <section class="alt">
    <div class="container">
      <h2>Selected Credits</h2>
      <div class="credits">
        <img src="https://ik.imagekit.io/hubertrazack/Credits/last-night.jpg?updatedAt=1741031204049" alt="Last Night" />
        <img src="https://ik.imagekit.io/hubertrazack/Credits/candy-cane-hit.jpg?updatedAt=1734652583858" alt="The Candy Cane Hit" />
        <img src="https://ik.imagekit.io/hubertrazack/Credits/the-huntress2.jpg?updatedAt=1734909461074" alt="The Huntress" />
        <img src="https://ik.imagekit.io/hubertrazack/Credits/gentle-barbarians.jpg?updatedAt=1745802248574" alt="Gentle Barbarians" />
        <img src="https://ik.imagekit.io/hubertrazack/Credits/inspecteur-disco-2000.jpg?updatedAt=1734836092130" alt="Inspecteur Disco 2000" />
        <img src="https://ik.imagekit.io/hubertrazack/Credits/high-priestess.jpg?updatedAt=1734652583737" alt="High Priestess of Eastern Ontario" />
        <img src="https://ik.imagekit.io/hubertrazack/Credits/backyard-treasure.jpg?updatedAt=1745802590654" alt="Backyard Treasure" />
        <img src="https://ik.imagekit.io/hubertrazack/Credits/save-the-date.jpg?updatedAt=1748550054167" alt="Save the Date" />
      </div>
    </div>
  </section>
    
  <section class="alt about" id="about">
    <div class="container flex">
      <div class="left">
        <h2>About Hubert</h2>
        <p>Hubert Razack is a composer for film, TV, and stage based in Toronto. He recently mixed the music for the upcoming feature length movie <strong>Gentle Barbarians</strong>, featuring Canadian MMA superstar George St Pierre, and composed the soundtrack for the anticipated animated movie <strong>The Candy Cane Hit</strong>. He wrote the theme music for the modern classical <strong>OriginL</strong> concert series, and was commissioned to create the music for the Irish dance show <strong>Once Upon a Rose</strong> which premiered in Mexico City by Bradigan Dance. He is a regular contributor to trailer music and production music libraries.</p>
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

  <div class="container" id="sync">
    <a href="/sync">View Sync Portfolio</a>
  </div>

</div>


<style>
  #sync {
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 200;
    text-align: right;
  }

  #sync a {
    background: #fff;
    color: #000;
    padding: 4px 12px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.9rem;
    transition: opacity 0.4s;
  }

  #sync a:hover {
    opacity: 0.6;
  }

  h1 {
    color: #fff;
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
    height: 760px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(/images/hero-background.jpg);
    background-size: cover;
    background-position: top center;
    overflow: hidden;
    z-index: 1;
    padding: 0;
  }

  .hero-inside {
    width: 100%;
    height: 100%;
    max-width: 1600px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-image {
    background: url(https://ik.imagekit.io/hubertrazack/hero-hubert2.png?updatedAt=1720731806010) no-repeat;
    background-size: 698px;
    height: 100%;
    width: 700px;
    position: absolute;
    top: 150px;
    left: 50px;
  }

  .hero-content {
    position: relative;
    z-index: 3;
    left: 200px;
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

  .credits {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .credits img {
    max-width: 100%;
  }

  section.about p {
    color: #bbb;
  }

  section.testimonials {
    padding-top: 0;
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

  @media only screen and (max-width: 1275px) {
    .hero-image {
      left: -50px;
    }

    .hero-content {
      left: 250px;
    }
  }

  @media only screen and (max-width: 1000px) {
    section.hero {
      height: 600px;
    }

    .hero-image {
      background-size: 500px;
      left: -100px;
    }

    .hero-content {
      left: 150px;
    }

    .examples {
      grid-template-columns: 1fr 1fr;
    }

    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    .subtitle {
      font-size: 1.1rem;
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
  }

  @media only screen and (max-width: 700px) {
    .contact-icons img {
      width: 50px;
      margin-right: 20px;
    }

    .examples {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 630px) {
    section.hero {
      height: 500px;
    }

    .hero-image {
      background-size: 400px;
      left: -100px;
    }

    .hero-content {
      left: 100px;
    }
  }

  @media only screen and (max-width: 520px) {
    .subtitle {
      font-size: 1rem;
    }

    .hero-content {
      top: 0px;
      left: 80px;
    }

    .hero-image {
      background-size: 350px;
      left: -100px;
    }

    .about img {
      width: 100%;
    }

    .contact-icons img {
      width: 40px;
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 520px) {
    .hero-content {
      width: 160px;
    }
  }
</style>