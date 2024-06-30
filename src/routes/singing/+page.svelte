<script>
  import { fade } from "svelte/transition";
  import SingingVideo from "$lib/SingingVideo.svelte";
</script>


<div in:fade>

  <section class="small first">
    <div class="container">
      <div class="grid">
        <div>
        <h2>Singing</h2>
        <p>An accomplished tenor with a passion for all kinds of music genres, Hubert has delighted audiences around the world. Born in France and classically trained in Toronto, he has developed a keen interest in sacred music, oratorio, and art songs. He has performed in Canada, France, japan, and Malaysia. Described as "a pleasing tenor full of personality", he continues to inspire and captivate audiences through his singing from the heart.</p>
        </div>
        <SingingVideo youtubeId="fyv6d33hkh0" title="Après un rêve, by Gabriel Fauré" thumbnailURL="https://ik.imagekit.io/hubertrazack/singing/thumbnail2.jpg?updatedAt=1719693965642&tr=w-800" />
        <SingingVideo youtubeId="-7RosHM1VMw" title="Thou Shalt Break Them, from Handel's Messiah" thumbnailURL="https://ik.imagekit.io/hubertrazack/singing/thumbnail4.jpg?updatedAt=1719698745806&tr=w-800" />
        <!--<SingingVideo youtubeId="duRSgo_r4O0" title="Vainement, ma bien-aimée (from Le roi d'Ys by Lalo)" thumbnailURL="https://ik.imagekit.io/hubertrazack/singing/thumbnail%20-%20vainement.jpg?updatedAt=1719695180148" />-->
        <SingingVideo youtubeId="p7wilERoQS4" title="Les Yeux, original song" thumbnailURL="https://ik.imagekit.io/hubertrazack/singing/thumbnail5.jpg?updatedAt=1719698850980&tr=w-800" />
      </div>
    </div>
  </section>

</div>


<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }

  @media only screen and (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>