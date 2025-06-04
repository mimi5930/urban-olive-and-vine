import { type Event } from "~/components/Events";
import {
  aldo,
  coltonWarren,
  conorMoor,
  empireNight,
  jazzSavvy,
  jefferySmith,
  nancyBierma,
  pegMeyer,
  saraVanValkenburg,
  stCroixAcoustic,
  tommyBentz,
} from "~/img";

type Musician = Pick<Event, "title" | "image" | "alt" | "description">;

//* Musicians

// Jazz Savvy
export const jazzSavvyGroup: Musician = {
  title: "Jazz Savvy",
  image: jazzSavvy,
  alt: "Jazz Savvy performs outside of Urban Olive and Vine.",
  description: (
    <p>
      Come down and tap your toes and snap your fingers to the fresh and
      innovative sounds of this talented jazz trio. A UO&V favorite!
      <br />
      <br />
      Jazz Savvy is a unique Twin Cities area jazz trio with a sound that you
      might not expect to hear locally. There’s no pabulum radio sound, no
      smooth jazz, or “canned” standard tunes. Every time Jazz Savvy presents a
      performance, they give the audience a new musical jazz experience to
      consider.
      <br />
      <br />
      Drums, percussion, and other erstwhile rhythmic offerings are provided by
      Joe Steinger. Originally a KC (Kansas City, MO) native, Joe migrated to
      the Twin Cites, and soon hooked up with a number of groups including his
      current main stay, Café Accordion Orchestra, among others. Joe provides a
      solid and liquid rhythmic addition to the performances that people enjoy
      and want to hear again.
      <br />
      <br />
      Rounding out the trio at the “bottom end” at bass, is Terry Bailey.
      Probably best described as a serous journeyman, Terry has played the Twin
      City area with a number of groups and at numerous venues. He has provided
      his services and is the current anchor for Jazz Savvy, who are building a
      strong following at a number of venues.
      <br />
      <br />
      <a className="underline" href="http://jazzsavvy.com/">
        jazzsavvy.com
      </a>
    </p>
  ),
};

// Colton Warren
export const coltonWarrenGroup: Musician = {
  title: "Colton Warren",
  alt: "Colton Warren playing his guitar",
  image: coltonWarren,
  description: (
    <p>
      Colton Warren is a singer/songwriter and multi-instrumentalist from the
      Twin Cities area who embraces a variety of musical styles. In the vein of
      Jack Johnson and The Lumineers, Colton uses his six string guitar and rich
      baritone voice to create music that sounds like waves, whiskey and
      wanderlust. Colton also integrates his 12 string guitar into live sets,
      building an atmospheric sound that is both soothing and vibrant. Whatever
      the instrument, his songs are crafted to inspire listeners in their own
      creativity.
      <br />
      <br />
      With a penchant for travel and adventure, Colton has had the opportunity
      to play around the country. His most notable events have been in his home
      state, and include Art-A-Whirl, MSP Airport, The Minnesota Historical
      Society, and the popular musician showcase, Songwriter Rounds. He has also
      been invited to play private events at art galleries and photo studios
      across the US. Perhaps his most unique concert was “Music in the Trees”,
      an event that took place in the middle of the woods where he performed
      from a deer stand.
      <br />
      <br />
      For updates, recordings and show times check out{" "}
      <a className="underline" href="https://coltonwarren.com/">
        www.coltonwarren.com
      </a>{" "}
      or follow him on Instagram @colton.warren.music.
    </p>
  ),
};

// Jeffery Smith
export const jefferySmithGroup: Musician = {
  title: "Jeffery Smith",
  image: jefferySmith,
  alt: "Jeffery smiles over his acoustic guitar",
  description: (
    <p>
      Jeffrey Smith has been playing music in the St. Croix Valley for 46 years.
      His solo show covers a broad swath of music from Coldplay to Willie Nelson
      to Sinatra - and a bunch of other things in between. With a pleasing mix
      of Pop, Country, Jazz, and Soft Rock hits, there promises to be something
      that will get your toes tapping and you humming along.
    </p>
  ),
};

// Sarah VanValkenburg
export const sarahVanValkenburgGroup: Musician = {
  title: "Sarah VanValkenburg",
  image: saraVanValkenburg,
  alt: "Sara sits to the right of her acoustic guitar",
  description: (
    <p>
      I have been in music all my life but I think the song writing started when
      my kids were much smaller than they are now, I used to make up little
      songs and verses to keep them entertained. I enjoyed rhyming and watching
      their faces light up at the silliness! I decided to start guitar lessons
      and after a few lessons my guitar teacher encouraged me to try writing my
      own songs, and suggested I play a show or two. I told him I couldn&apos;t
      possibly do that - to which he responded, “Why not?” I didn&apos;t have a
      good reason, so I picked up my pen, paper, and guitar and began writing my
      story in song. My first CD is titled &quot;WHY NOT?&quot;
      <br />
      <br />
      My favorite part about playing shows is watching people&apos;s reactions
      to my music. If I can make someone happy through a song, then I&apos;ve
      done my job. I think music can create a space for camaraderie and
      togetherness, so when a listener comes up after a show and tells me they
      can relate to something I wrote about - it makes my night.
      <br />
      <br />
      Sarah VanValkenburg
    </p>
  ),
};

// Aldo
export const aldoGroup: Musician = {
  title: "Aldo (John Altenbernd)",
  alt: "Aldo, sits in front of his piano",
  image: aldo,
  description: (
    <p>
      Aldo (John Altenbernd) will be performing selections from his previously
      released albums along with new material from his upcoming release,
      &quot;One by One&quot;.
      <br />
      <br />
      Aldo (John Altenbernd) is most proud of the Upper MidWest Emmy award he
      won for his work on the PBS documentary, Delafield. Other notable projects
      include the nationally syndicated PBS series Painting with Paulson and the
      theme to the popular Prairie Public Television kids&apos; series,
      Kid&apos;s Zone. His music has been picked up by national television
      shows, including the Today Show, As the World Turns, Last Call with Carson
      Daly, NPR, and the Rosie O&apos;Donnell Show, among others. Additionally,
      he served as the music director of the Black Swan Dinner Theatre in Fargo,
      ND for one year before moving to Minneapolis to join a friend&apos;s band,
      Nero&apos;s House Band, that played throughout the Twin Cities metro area
      during the 1990s.
      <br />
      <br />
      John has released six albums under his nickname, Aldo, which he got tagged
      with at age 15 (long story). In 2002, he released Expressions, available
      exclusively through Cardtunes, a locally-owned promotional company. He can
      also be heard on the award-winning Acoustitherapy series from Colorado
      Creative Music.
      <br />
      <br />
      Currently, Aldo is working on his seventh album, &quot;One by One&quot;.
      <br />
      <br />
      Learn more about Aldo (John Altenbernd) at{" "}
      <a className="underline" href="https://powernote.com/">
        www.powernote.com
      </a>
    </p>
  ),
};

// Jim and Nancy Bierma
export const jimAndNancyBiermaGroup: Musician = {
  title: "Jim & Nancy Bierma",
  image: nancyBierma,
  alt: "Nancy and Jim play across from one-another, Nancy on piano and Jim on double bass",
  description: (
    <p>
      Nancy and Jim have been playing jazz together since 1976. Originally from
      Iowa, they performed in the Des Moines area until moving to the Twin
      Cities in 1994. Nancy (piano) and Jim (bass) love the opportunity to play
      as a duo, but each also have vast experience performing in all types of
      jazz ensembles. Their style can be described as post-Coltrane modern jazz.
      They love any song that has a beautiful melody and interesting chords,
      which makes their repertoire eclectic and includes a mix of jazz standards
      and popular songs from all eras. Both Nancy and Jim have been inducted
      into the Iowa Jazz Hall of Fame.
    </p>
  ),
};

// Conor Moor
export const conorMoorLiveGroup: Musician = {
  title: "Conor Moor Live",
  image: conorMoor,
  alt: "Conor Moor stands holding his acoustic guitar",
  description: (
    <p>
      Conor Moor is a talented and authentic musician with a soulful sound that
      resonates deeply with listeners. Hailing from diverse music scenes in
      major cities like Los Angeles, New Orleans, Portland, and Asheville, Conor
      has left his mark on stages big and small. With a background of playing in
      bands and recording multiple albums, Conor is now embarking on his solo
      journey, captivating audiences with his heartfelt lyrics and
      trance-inducing melodies. His performances are raw, emotive, and skillful,
      as he paints pictures with his music. Conor&apos;s powerful vocals and
      skilled guitar playing create an immersive experience, drawing listeners
      into his intimate world of sound. As he continues to evolve as a solo
      artist, Conor Moor&apos;s music performances promise not to disappoint and
      above all else, entertain.
    </p>
  ),
};

// St. Croix Acoustic
export const stCroixAcousticGroup: Musician = {
  title: "St Croix Acoustic",
  image: stCroixAcoustic,
  alt: "St. Croix Acoustic is performing in front of Urban on their piano and fiddle",
  description: (
    <p>
      St. Croix Acoustic is a 2 person duo. Pat Quinn and Larry May perform
      Americana, pop, Irish and Scottish, rock and some old standards.
      Instruments played are guitar, fiddle, mandolin, Irish whistles, Scottish
      small pipes and vocals.
    </p>
  ),
};

// Empire Night
export const empireNightGroup: Musician = {
  title: "Empire Night",
  image: empireNight,
  alt: "Empire night sings on stage with a guitar and a tambourine",
  description: (
    <p>
      Empire Night is Tatiana Calderon and John Ryan- A Duo featuring both
      guitar and keyboards. We cover a very wide range of music you know, but
      may not hear covered from other performers- current pop folk and country,
      favorite 90&apos;s songs, and fun campy 60&apos;s and 70&apos;s songs
      everyone will enjoy. Tatiana and John have been playing music together for
      over 7 years, and as a duo for 4 years. Tatiana&apos;s amazing vocal range
      is complemented by John&apos;s polished piano talent, guitar, vocals, and
      tasteful rhythm tracks. Tatiana and John play regularly at area wineries,
      upscale restaurants, and private events.
    </p>
  ),
};

// Peg Meyer
export const pegMeyerGroup: Musician = {
  title: "Peg Meyer",
  image: pegMeyer,
  alt: "Peg Meyer smiles standing in front of a flower bush",
  description: (
    <p>
      Peg Meyer, of Quinn & Meyer has an eclectic repertoire that draws from
      experience gained in white-table-cloth supper clubs, coffee houses, some
      nice theater stages, lively bars, and terrific restaurants (e.g. Urban
      Olive & Vine). Come for the food - stay for the music!
    </p>
  ),
};

// Tommy Bentz
export const tommyBentzGroup: Musician = {
  title: "Tommy Bentz",
  image: tommyBentz,
  alt: "Tommy Bentz plays his guitar",
  description: (
    <p>
      Growing up in a small Wisconsin town isn&apos;t always limiting as it
      sounds. An eclectic musician, Bentz totes history with the violin, oboe,
      saxophone, guitar, and bass. Putting all of this musical knowledge
      together to start a band for the first time in high school, Bentz&apos;s
      love of music would give him the flexibility to perform in rock,
      classical, jazz, blues, bluegrass and jam bands. When asked for his
      resume, Bentzs list goes on...
      <br />
      <br />
      His sound gives credence to this fact the many faces and different genres
      of music have allowed him to create his own sound: one that blends ideals
      from many flavors of music into one (kind of like at the ice cream store
      he managed as a teen). The distinct movement, layering, and syncopation of
      his style, though intense, is immediately accessible to the listener. Some
      may say that Tommy Bentz&apos;s greatest asset is his confident and mature
      electric slide guitar style, yet others will argue that his insightful
      lyrics and adept layering of sound are what keep them coming back to hear
      him play again and again. Regardless, with three full length albums under
      his belt - each of them a landmark of musical growth in a coming of age
      fashion, Tommy Bentz represents a man with spirit, drive, thoughtful
      journeys, and musical ability that so many musicians strive to achieve.
      <br />
      <br />
      While reading his lyrics, one gets a snapshot of Bentz&apos;s ideals -
      from the strength he derives from family relationships, to the
      all-important issue of respect in this changing world. We read and are
      left with an impression of a man who learns from where he&apos;s been,
      uses the knowledge and presses forward into the unknown with purpose. If
      lyrics alone drove Bentz&apos;s work, he&apos;d have a great product, but
      no one can discount the musicians technical prowess or his warm timbre and
      soulful vocals. There&apos;s a distinct blend of southern jam style rock
      and acoustic singer-songwriter flair, with his rounded sound being
      completed by remnants of his experience in jazz and classical performance.
      <br />
      <br />
      An ever-ambitious entrepreneur, Tommy owns and operates Brickhouse Music
      and calls River Falls, Wisconsin home.
      <br />
      <br />
      <a className="underline" href="https://tommybentz.com">
        tommybentz.com
      </a>
    </p>
  ),
};
