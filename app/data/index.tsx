import { type Event } from "~/components/Events";
import {
  aldo,
  coltonWarren,
  conorMoor,
  empireNight,
  jazzSavvy,
  jefferySmith,
  nancyBierma,
  quinnAndMeyer,
  saraVanValkenburg,
  scottGraves,
  stCroixAcoustic,
  tommyBentz,
} from "~/img";

type Musician = Pick<Event, "title" | "image" | "alt" | "description">;

// Musicians

// Jazz Savvy
const jazzSavvyGroup: Musician = {
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

export const urbanSummerEvents: Event[] = [
  {
    id: 1,
    title: "Colton Warron",
    startTime: new Date("Saturday, May 03, 2025, 2:00 PM").toISOString(),
    endTime: new Date("Saturday, May 03, 2025, 4:00:00 pm").toISOString(),
    alt: "Colton Warren playing his guitar",
    image: coltonWarren,
    description: (
      <p>
        Colton Warren is a singer/songwriter and multi-instrumentalist from the
        Twin Cities area who embraces a variety of musical styles. In the vein
        of Jack Johnson and The Lumineers, Colton uses his six string guitar and
        rich baritone voice to create music that sounds like waves, whiskey and
        wanderlust. Colton also integrates his 12 string guitar into live sets,
        building an atmospheric sound that is both soothing and vibrant.
        Whatever the instrument, his songs are crafted to inspire listeners in
        their own creativity.
        <br />
        <br />
        With a penchant for travel and adventure, Colton has had the opportunity
        to play around the country. His most notable events have been in his
        home state, and include Art-A-Whirl, MSP Airport, The Minnesota
        Historical Society, and the popular musician showcase, Songwriter
        Rounds. He has also been invited to play private events at art galleries
        and photo studios across the US. Perhaps his most unique concert was
        “Music in the Trees”, an event that took place in the middle of the
        woods where he performed from a deer stand.
        <br />
        <br />
        For updates, recordings and show times check out{" "}
        <a className="underline" href="https://coltonwarren.com/">
          www.coltonwarren.com
        </a>{" "}
        or follow him on Instagram @colton.warren.music.
      </p>
    ),
  },
  {
    id: 2,
    title: "Jeffery Smith",
    startTime: new Date("May 10, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 10, 2025, 4:00:00 pm").toISOString(),
    image: jefferySmith,
    alt: "Jeffery smiles over his acoustic guitar",
    description: <p></p>,
  },
  {
    id: 3,
    title: "Sarah VanValkenburg",
    startTime: new Date("May 17, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 17, 2025, 4:00:00 pm").toISOString(),
    image: saraVanValkenburg,
    alt: "Sara sits to the right of her acoustic guitar",
    description: (
      <p>
        I have been in music all my life but I think the song writing started
        when my kids were much smaller than they are now, I used to make up
        little songs and verses to keep them entertained. I enjoyed rhyming and
        watching their faces light up at the silliness! I decided to start
        guitar lessons and after a few lessons my guitar teacher encouraged me
        to try writing my own songs, and suggested I play a show or two. I told
        him I couldn&apos;t possibly do that - to which he responded, “Why not?”
        I didn&apos;t have a good reason, so I picked up my pen, paper, and
        guitar and began writing my story in song. My first CD is titled
        &quot;WHY NOT?&quot;
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
  },
  {
    id: 4,
    title: "Aldo (John Altenbernd)",
    startTime: new Date("May 24, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 24, 2025, 4:00:00 pm").toISOString(),
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
        won for his work on the PBS documentary, Delafield. Other notable
        projects include the nationally syndicated PBS series Painting with
        Paulson and the theme to the popular Prairie Public Television
        kids&apos; series, Kid&apos;s Zone. His music has been picked up by
        national television shows, including the Today Show, As the World Turns,
        Last Call with Carson Daly, NPR, and the Rosie O&apos;Donnell Show,
        among others. Additionally, he served as the music director of the Black
        Swan Dinner Theatre in Fargo, ND for one year before moving to
        Minneapolis to join a friend&apos;s band, Nero&apos;s House Band, that
        played throughout the Twin Cities metro area during the 1990s.
        <br />
        <br />
        John has released six albums under his nickname, Aldo, which he got
        tagged with at age 15 (long story). In 2002, he released Expressions,
        available exclusively through Cardtunes, a locally-owned promotional
        company. He can also be heard on the award-winning Acoustitherapy series
        from Colorado Creative Music.
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
  },
  {
    id: 5,
    title: "Nancy Bierma",
    startTime: new Date("May 31, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("May 31, 2025, 4:00:00 pm").toISOString(),
    image: nancyBierma,
    alt: "Nancy and Jim play across from one-another, Nancy on piano and Jim on double bass",
    description: (
      <p>
        Nancy is from Newton, Iowa and began playing piano at age 3. She
        graduated with a degree in classical music but realized jazz was her
        passion. Nancy met her husband Jim in 1976 while she was learning to
        play jazz. Jim began playing upright bass professionally while still in
        high school. Nancy and Jim are both inductees into the Iowa Jazz Hall of
        Fame. They can provide music for all types of venues or events. They
        recently played at the Dakota, Urban Olive, and Vine, Crooners, Jazz
        Central, The Lexington and for private parties. Nancy and Jim believe
        that a room filled with music provides healing and uplifts the soul.
        Together they know thousands of songs and love sharing the joy of
        creating music.
        <br />
        <br />
        “A Soul lifting evening”- audience member
        <br />
        <br />
        Contact Nancy at{" "}
        <a href="mailto:nbierma@comcast.net">nbierma@comcast.net</a>
        <br />
        <br />
        Check us out on our YouTube channel{" "}
        <a
          className="underline"
          href="https://www.youtube.com/channel/UC-2Max35V9WqPVjl0q_vDgw"
        >
          www.youtube.com/NancyBierma
        </a>
        <br />
        <br />
        Follow us on Instagram{" "}
        <a className="underline" href="https://www.instagram.com/nancybierma/">
          instagram.com/nancybierma/
        </a>
      </p>
    ),
  },
  {
    id: 6,
    title: "Jeffery Smith",
    startTime: new Date("June 7, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 7, 2025, 4:00:00 pm").toISOString(),
    image: jefferySmith,
    alt: "Jeffery smiles over his acoustic guitar",
    description: <p></p>,
  },
  {
    id: 7,
    title: "Conor Moor Live",
    startTime: new Date("June 14, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 14, 2025, 4:00:00 pm").toISOString(),
    image: conorMoor,
    alt: "Conor Moor stands holding his acoustic guitar",
    description: (
      <p>
        Conor Moor is a talented and authentic musician with a soulful sound
        that resonates deeply with listeners. Hailing from diverse music scenes
        in major cities like Los Angeles, New Orleans, Portland, and Asheville,
        Conor has left his mark on stages big and small. With a background of
        playing in bands and recording multiple albums, Conor is now embarking
        on his solo journey, captivating audiences with his heartfelt lyrics and
        trance-inducing melodies. His performances are raw, emotive, and
        skillful, as he paints pictures with his music. Conor&apos;s powerful
        vocals and skilled guitar playing create an immersive experience,
        drawing listeners into his intimate world of sound. As he continues to
        evolve as a solo artist, Conor Moor&apos;s music performances promise
        not to disappoint and above all else, entertain.
      </p>
    ),
  },
  {
    id: 8,
    title: "St Croix Acoustic",
    startTime: new Date("June 21, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 21, 2025, 4:00:00 pm").toISOString(),
    image: stCroixAcoustic,
    alt: "St. Croix Acoustic is performing in front of Urban on their piano and fiddle",
    description: (
      <p>
        St. Croix Acoustic is a 2 person duo. Pat Quinn and Larry May perform
        Americana, pop, Irish and Scottish, rock and some old standards.
        Instruments played are guitar, fiddle, mandolin, Irish whistles,
        Scottish small pipes and vocals.
      </p>
    ),
  },
  {
    id: 9,
    title: "Jazz Savvy",
    startTime: new Date("June 28, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("June 28, 2025, 4:00:00 pm").toISOString(),
    image: jazzSavvy,
    alt: "Jazz Savvy performs in Urban",
    description: (
      <p>
        Jazz Savvy is a Twin Cities area jazz trio that provides a perfect
        musical addition to your special event or venue. Never intrusive or
        sonically aggressive, Jazz Savvy gives you and your guests a memorable
        listening experience that will make them smile. These experienced
        musicians share their enthusiasm for fine classical jazz, with a
        professional ability that is apparent in every tune they play.
        <br />
        <br />
        About the Musicians
        <br />
        <br />
        Tom Pletscher
        <br />
        Keyboardist
        <br />
        Driving the melodies is keyboardist Tom Pletscher, a Minnesota native
        that has been involved with the Twin Cities jazz scene for over 30
        years. He&apos;s a recognized educator, and composer, and is a faculty
        member of the MacPhail Center for Music in Minneapolis, MN.
        <br />
        <br />
        Joe Steinger
        <br />
        Rhythm
        <br />
        Drums, percussion, and other erstwhile rhythmic offerings are provided
        by Joe Steinger. He provides his percussive services to a number of
        local, well known area groups, (including Café Accordion Orchestra) and
        his liquid rhythmic style add a signature to every performance.
        <br />
        <br />
        Terry Bailey
        <br />
        Bassist
        <br />
        Terry Bailey lays down a solid foundation for the trio on bass. His easy
        style, acquired from many years of playing experience with numerous
        groups and venues, locks down the grooves. Whether the tune is a jazz
        standard, bossa, a blues tune or swing; pop, rock, Latin or other genre,
        it&apos;s all done with verve and class.
        <br />
        <br />
        <a className="underline" href="http://jazzsavvy.com/">
          jazzsavvy.com
        </a>
      </p>
    ),
  },
  {
    id: 10,
    title: "Scott Graves",
    startTime: new Date("July 5, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("July 5, 2025, 4:00:00 pm").toISOString(),
    image: scottGraves,
    alt: "Scott Graves sits at the piano",
    description: (
      <p>
        Scott Graves has been active in the Twin Cities and Minnesota music
        community over the last forty years, most notably playing and serving as
        Musical Director for Big Walter Smith and the Groove Merchants for
        twenty-five years. Playing guitar, keyboards, and horns, he loves to
        play music that has groove and soul. In addition to playing many clubs,
        concerts, and festivals in the Midwest, Scott has had the opportunity to
        play on ships, including Cunard&apos;s Queen Elizabeth 2 (QE2), cruising
        the Caribbean and across the Atlantic Ocean.
      </p>
    ),
  },
  {
    id: 11,
    title: "Aldo (John Altenbernd)",
    startTime: new Date("July 12, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("July 12, 2025, 4:00:00 pm").toISOString(),
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
        won for his work on the PBS documentary, Delafield. Other notable
        projects include the nationally syndicated PBS series Painting with
        Paulson and the theme to the popular Prairie Public Television
        kids&apos; series, Kid&apos;s Zone. His music has been picked up by
        national television shows, including the Today Show, As the World Turns,
        Last Call with Carson Daly, NPR, and the Rosie O&apos;Donnell Show,
        among others. Additionally, he served as the music director of the Black
        Swan Dinner Theatre in Fargo, ND for one year before moving to
        Minneapolis to join a friend&apos;s band, Nero&apos;s House Band, that
        played throughout the Twin Cities metro area during the 1990s.
        <br />
        <br />
        John has released six albums under his nickname, Aldo, which he got
        tagged with at age 15 (long story). In 2002, he released Expressions,
        available exclusively through Cardtunes, a locally-owned promotional
        company. He can also be heard on the award-winning Acoustitherapy series
        from Colorado Creative Music.
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
  },
  {
    id: 12,
    title: "St Croix Acoustic",
    startTime: new Date("July 19, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("July 19, 2025, 4:00:00 pm").toISOString(),
    image: stCroixAcoustic,
    alt: "St. Croix Acoustic is performing in front of Urban on their piano and fiddle",
    description: (
      <p>
        St. Croix Acoustic is a 2 person duo. Pat Quinn and Larry May perform
        Americana, pop, Irish and Scottish, rock and some old standards.
        Instruments played are guitar, fiddle, mandolin, Irish whistles,
        Scottish small pipes and vocals.
      </p>
    ),
  },
  {
    id: 13,
    title: "Empire Night",
    startTime: new Date("July 26, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("July 26, 2025, 4:00:00 pm").toISOString(),
    image: empireNight,
    alt: "Empire night sings on stage with a guitar and a tambourine",
    description: (
      <p>
        A Duo with a Twist! Featuring Tatiana&apos;s amazing vocals, and John on
        guitar, keyboards and vocals, Empire Night plays a fun, upbeat selection
        of music of contemporary pop and folk, great 90&apos;s songs, and select
        60&apos;s and 70&apos;s piano songs you haven&apos;t heard in a while.
        Empire Night is the perfect entertainment for your winery, restaurant,
        and special event! Songs you know and love but not everyone else plays!
      </p>
    ),
  },
  {
    id: 14,
    title: "Quinn and Meyer",
    startTime: new Date("August 2, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 2, 2025, 4:00:00 pm").toISOString(),
    alt: "Pat Quinn and Peg/M.Etta Meyer perform, both holding their acoustic guitars",
    image: quinnAndMeyer,
    description: (
      <p>
        Pat Quinn and Peg/M.Etta Meyer perform a wide range of music, including
        folk rock, traditional and contemporary Irish songs, plus some pop and
        original material. Known for their tight harmonies and good-natured
        chemistry, Quinn & Meyer continue to welcome new listeners into their
        ever-expanding family of beloved regulars.
        <br />
        <br />
        Learn more about Quinn and Meyer at{" "}
        <a className="underline" href="https://www.quinnandmeyer.com/">
          www.quinnandmeyer.com
        </a>
      </p>
    ),
  },
  {
    id: 15,
    title: "Tommy Bentz",
    startTime: new Date("August 9, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 9, 2025, 4:00:00 pm").toISOString(),
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
        His sound gives credence to this fact the many faces and different
        genres of music have allowed him to create his own sound: one that
        blends ideals from many flavors of music into one (kind of like at the
        ice cream store he managed as a teen). The distinct movement, layering,
        and syncopation of his style, though intense, is immediately accessible
        to the listener. Some may say that Tommy Bentz&apos;s greatest asset is
        his confident and mature electric slide guitar style, yet others will
        argue that his insightful lyrics and adept layering of sound are what
        keep them coming back to hear him play again and again. Regardless, with
        three full length albums under his belt - each of them a landmark of
        musical growth in a coming of age fashion, Tommy Bentz represents a man
        with spirit, drive, thoughtful journeys, and musical ability that so
        many musicians strive to achieve.
        <br />
        <br />
        While reading his lyrics, one gets a snapshot of Bentz&apos;s ideals -
        from the strength he derives from family relationships, to the
        all-important issue of respect in this changing world. We read and are
        left with an impression of a man who learns from where he&apos;s been,
        uses the knowledge and presses forward into the unknown with purpose. If
        lyrics alone drove Bentz&apos;s work, he&apos;d have a great product,
        but no one can discount the musicians technical prowess or his warm
        timbre and soulful vocals. There&apos;s a distinct blend of southern jam
        style rock and acoustic singer-songwriter flair, with his rounded sound
        being completed by remnants of his experience in jazz and classical
        performance.
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
  },
  {
    id: 16,
    title: "Jeffery Smith",
    startTime: new Date("August 16, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 16, 2025, 4:00:00 pm").toISOString(),
    image: jefferySmith,
    alt: "Jeffery smiles over his acoustic guitar",
    description: <p></p>,
  },
  {
    id: 17,
    title: "St Croix Acoustic",
    startTime: new Date("August 23, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 23, 2025, 4:00:00 pm").toISOString(),
    image: stCroixAcoustic,
    alt: "St. Croix Acoustic is performing in front of Urban on their piano and fiddle",
    description: (
      <p>
        St. Croix Acoustic is a 2 person duo. Pat Quinn and Larry May perform
        Americana, pop, Irish and Scottish, rock and some old standards.
        Instruments played are guitar, fiddle, mandolin, Irish whistles,
        Scottish small pipes and vocals.
      </p>
    ),
  },
  {
    id: 18,
    title: "Aldo (John Altenbernd)",
    startTime: new Date("August 30, 2025, 2:00:00 pm").toISOString(),
    endTime: new Date("August 30, 2025, 4:00:00 pm").toISOString(),
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
        won for his work on the PBS documentary, Delafield. Other notable
        projects include the nationally syndicated PBS series Painting with
        Paulson and the theme to the popular Prairie Public Television
        kids&apos; series, Kid&apos;s Zone. His music has been picked up by
        national television shows, including the Today Show, As the World Turns,
        Last Call with Carson Daly, NPR, and the Rosie O&apos;Donnell Show,
        among others. Additionally, he served as the music director of the Black
        Swan Dinner Theatre in Fargo, ND for one year before moving to
        Minneapolis to join a friend&apos;s band, Nero&apos;s House Band, that
        played throughout the Twin Cities metro area during the 1990s.
        <br />
        <br />
        John has released six albums under his nickname, Aldo, which he got
        tagged with at age 15 (long story). In 2002, he released Expressions,
        available exclusively through Cardtunes, a locally-owned promotional
        company. He can also be heard on the award-winning Acoustitherapy series
        from Colorado Creative Music.
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
  },
];
