<script>
  import { fade } from "svelte/transition";
  import Piece from "$lib/Piece.svelte";
</script>


<div in:fade>

  <section class="small first orchestra">
    <div class="container">
      <h2>Chamber & Orchestra</h2>
      <div class="items">
        <Piece type="orchestra" title="Adventure 84!" year="2024">
          For full orchestra
        </Piece>
        <Piece type="orchestra" title="The Edge of Spring" year="2024">
          For string quartet
        </Piece>
        <Piece type="orchestra" title="Gnossienne No. 1" year="2024">
          Arrangement for full orchestra
        </Piece>
        <Piece type="orchestra" title="Inspirium" year="2023">
          For hybrid orchestra
        </Piece>
      </div>
    </div>
  </section>

  <section class="small alt">
    <div class="container">
      <h2>Choral</h2>
      <div class="items">
        <Piece type="choral" title="The Springtime of Lovers" year="2022">
          SATB (poem by Rumi)
        </Piece>
        <Piece type="choral" title="Wait" year="2021">
          SATB + piano (poem by Amber Earl)
        </Piece>
        <Piece type="choral" title="In the Hour Between" year="2017">
          SATB + piano (poem by Emiko Hsuen)
        </Piece>
        <Piece type="choral" title="Spring's Saraband" year="2017">
          SATB + piano (poem by Bliss Cartman)
        </Piece>
        <Piece type="choral" title="God's Love, a mini-oratorio" year="2016">
          SATB + organ (extracts from the new and old testament)
        </Piece>
      </div>
    </div>
  </section>

  <section class="small choir">
    <div class="container">
      <h2>Vocal</h2>
      <div class="items">
        <Piece type="vocal" title="Awake to Smile" year="2022">
          Art song (poem by Robert William Service) - high/medium voice
        </Piece>
        <Piece type="vocal" title="For Little Things" year="2022">
          Art song (poem by Lucy Maud Montgomery) - high/medium voice
        </Piece>
        <Piece type="vocal" title="What Amazing Things" year="2019">
          Sacred song (Psalm 126) - high voice
        </Piece>
        <Piece type="vocal" title="Wait For the Lord" year="2018">
          Sacred song (Psalm 27) - high voice
        </Piece>
        <Piece type="vocal" title="Psalm 139" year="2018">
          Sacred song - high voice
        </Piece>
        <Piece type="vocal" title="Les roses de Saadi" year="2013">
          Art song (poem by Marceline Desbordes-Valmore) - high/medium voice
        </Piece>
        <Piece type="vocal" title="La bonne chanson" year="2022">
          Art song (poem by Paul Verlaine) - high/medium voice
        </Piece>
        <Piece type="vocal" title="Je vous salue Marie" year="2012">
          Sacred song - high/medium voice
        </Piece>
        <Piece type="vocal" title="Les yeux" year="2011">
          Art song (poem by Sully Prudhomme) - high/medium voice
        </Piece>
      </div>
    </div>
  </section>

</div>


<style>
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  section.orchestra {
    background-image: url(https://ik.imagekit.io/hubertrazack/orchestra.jpg?updatedAt=1716527423255);
    background-size: cover;
    background-position: 0 -350px;
  }

  section.choir {
    background-image: url(https://ik.imagekit.io/hubertrazack/choir.jpg?updatedAt=1716527531181);
    background-size: cover;
    background-position: 0 -100px;
  }
</style>