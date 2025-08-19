<script>
  import { fade } from "svelte/transition";
  import Piece from "$lib/Piece.svelte";
  import SingingVideo from "$lib/SingingVideo.svelte";
</script>


<div in:fade>

  <section class="first alt choral" id="choral">
    <div class="container">
      <h2>Choral</h2>
      <div class="items">
        <Piece type="choral" title="Open My Eyes" year="2025" ensemble="For SATB" slug="open-my-eyes">
          A beautiful text speaking of how important it is to recognise the limitation of perceptions, and how our world view can be transformed by something higher than us.
        </Piece>
        <Piece type="choral" title="The Springtime of Lovers" year="2022" ensemble="For SATB" slug="springtime-of-lovers">
          An adpatation of a poem by Rumi, which reflects the mystical and symbolic language common in Sufi poetry. It encapsulates his central themes of love, transformation, and the search for the divine. I kept the music very straightforward, with only a slight twist at the end as the "body becomes wholly soul".
        </Piece>
        <Piece type="choral" title="Wait" year="2021" ensemble="For SATB and piano" slug="wait">
          This poem was written by Canadian author Amber Earl right in the midst of the pandemic. It explores what it felt like to have our life be seemingly on pause, and yet how to keep a spirit of optimism. The music reflects the transition from anxiety to confidence in the future.
        </Piece>
        <Piece type="choral" title="In The Hour Between" year="2017" ensemble="For SATB and piano" slug="in-the-hour-between">
          This beautiful poem by Emiko Hsuen describes what occurs when a child goes through things they cannot understand, and how ultimately our ever-present inner child needs the embrace of a higher love. The music illustrates this transition from unsettling harmonies to beautiful and reassuring textures.
        </Piece>
        <Piece type="choral" title="Spring's Saraband" year="2017" ensemble="For SATB and piano" slug="springs-saraband">
          Written for a concert celebrating Canadian artists at the Lawrence Park Community Church. I picked this lovely poem by Bliss Carman, a very prolific Canadian poet. The poem is full of vivid imagery of natures, with a sense of enthusiasm which I tried to convey in the music.
        </Piece>
        <Piece type="choral" title="God's Love, a mini-oratorio" year="2016" ensemble="For SATB, tenor soloist, and organ" slug="gods-love">
          Since having started my vocal training I have been fascinated by sacred music, and oratorios especially. My first exposure to choral music was the first movement of the St John's Passion by Bach - to this day one of my all-time favorite choral pieces. I wrote this mini-oratorio for a fundraiser concert and based it on text from the old and new testament.
        </Piece>
      </div>
      <!--<SingingVideo youtubeId="PFyAwRzXNTQ" title="Gos'd Love (mini-oratorio for SATB, tenor soloist, and organ)" thumbnailURL="https://ik.imagekit.io/hubertrazack/singing/thumbnail2.jpg?updatedAt=1719693965642&tr=w-800" />-->
    </div>
  </section>

  <section class="alt orchestra">
    <div class="container">
      <h2>Chamber & Orchestra</h2>
      <div class="items">
        <Piece type="orchestra" title="Adventure 84!" year="2024" ensemble="For full orchestra">
          This is my homage to the golden age of orchestral adventure film music. A 5 minute piece that could be played after our young heros have saved the day and as the credits roll.
        </Piece>
        <Piece type="orchestra" title="The Edge of Spring" year="2024" ensemble="For string quartet">
          This piece evokes the time of the year where life has finished blooming and is now ready to take on the world.
        </Piece>
        <Piece type="orchestra" title="Gnossienne No. 1 (Arrangement)" year="2024" ensemble="For full orchestra">
          Erik Satie's Gnossiennes are a staple of contemporary piano music, and it was a thrill to write an arrangement of the first movement for full orchestra. I did my best to preserve the quirky and mystical aspect of the music while using all the colors available in the orchestra.
        </Piece>
        <Piece type="orchestra" title="Inspirium" year="2023" ensemble="For contemporary ensemble">
          This is a throwback to the age of vinyl records, where often contemporary composers would write a piece of music in 2 movements, for side A and B. This is a piece for an unusual ensemble: piano, acoustic, bass, and electric guitar, flute, harp, violin, and percussions.
        </Piece>
      </div>
    </div>
  </section>

  <section class="vocal alt" id="vocal">
    <div class="container">
      <h2>Vocal</h2>
      <div class="items small">
        <Piece type="vocal" title="Au bord de la mer" year="2025">
          Art song (poem by Théophile Gautier) - high/medium voice
        </Piece>
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
    grid-column-gap: 12rem;
    grid-row-gap: 4rem;
  }

  .items.small {
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
  }

  section.vocal {
    background-image: url(https://ik.imagekit.io/hubertrazack/orchestra.jpg?updatedAt=1716527423255);
    background-size: cover;
    background-position: 0 -350px;
  }

  section.choral {
    background-image: url(https://ik.imagekit.io/hubertrazack/choral.jpg?updatedAt=1720583812927);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 800px) {
    .items {
      grid-template-columns: 1fr;
    }
  }
</style>