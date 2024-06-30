<script>
  import PieceFull from "$lib/PieceFull.svelte";
</script>


<PieceFull title="The Springtime of Lovers" date="2022" ensemble="SATB a capella" duration="2'30">

  <div class="description">
    An adpatation of a poem by Rumi, which reflects the mystical and symbolic language common in Sufi poetry. It encapsulates his central themes of love, transformation, and the search for the divine. I kept the music very straightforward, with only a slight twist at the end as <em>"the body becomes wholly soul"</em>.
  </div>
  
  <div class="columns">
    <img src="https://www.worldhistory.org/img/r/p/1000x1200/12298.jpg.webp?v=1697081403" alt="Rumi" width="400" />
    <div class="lyrics">
      The springtime of Lovers has come,<br />
      that this dust bowl may become a garden;<br />
      the proclamation of heaven has come,<br />
      that the bird of the soul may rise in flight.<br />
      The sea becomes full of pearls,<br />
      the salt marsh becomes sweet as kauthar,<br />
      the stone becomes a ruby from the mine,<br />
      the body becomes wholly soul.
    </div>
  </div>

</PieceFull>


<style>
  .description {
    margin-top: 2rem;
    margin-bottom: 3rem;
    max-width: 800px;
  }

  .columns {
    display: flex;
    grid-gap: 6rem;
  }
</style>