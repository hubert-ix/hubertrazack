<script>
  import { fade } from "svelte/transition";
  import Recording from "$lib/Recording.svelte";
</script>


<div in:fade>

  <section class="small first">
    <div class="container">
      <h2>Recordings</h2>
      <div class="items">
        <Recording title="Faure" thumbnailURL="https://ik.imagekit.io/hubertrazack/covers/Faure.jpg?updatedAt=1714083850929">
          "Fauré", a collection of 4 songs performed by Tenor Hubert Razack and pianist Cari Astleford
        </Recording>
        <Recording title="Inspirium" thumbnailURL="https://ik.imagekit.io/hubertrazack/covers/inspirium-white.jpg?updatedAt=1714083469638">
          Inspirium is a piece that takes its roots in the format of the late 70s instrumental albums. It is all hand-played on various acoustic instruments, and features some fantastic guest musicians.
        </Recording>
        <Recording title="Journeyman" thumbnailURL="https://ik.imagekit.io/hubertrazack/covers/journeyman-cover2.jpg?updatedAt=1714083598233">
          A collection of pieces recorded over the years, featuring music for art exhibitions, musicals, videos, and various live shows.  
        </Recording>
        <Recording title="Once Upon a Rose" thumbnailURL="https://ik.imagekit.io/hubertrazack/covers/once%20upon%20a%20rose.jpg?updatedAt=1714083760369">
          This music was written for an Irish dance show which premiered in Mexico City. Expect a lot of fiddle (and the occasional fairy).  
        </Recording>
        <Recording title="Polymer" thumbnailURL="https://ik.imagekit.io/hubertrazack/covers/polymer.jpg?updatedAt=1714084013771">
          A 20 minute Instrumental progressive rock piece
        </Recording>
      </div>
    </div>
  </section>

</div>


<style>
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }
</style>