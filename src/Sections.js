import odeath from './img/o-death-medium.png'
import ngnCover from './img/ngn-cover.png'
import { NavLink } from 'react-router-dom'

export const Bio = () => (
  <>
    <h2>bio</h2>
    <p>i am Santiago. i am a queer Mexican immigrant, a software engineer, musician, movement artist, and performer.</p>
  </>
)

export const ODeath = () => (
  <>
    <h2>o death</h2>
  <p>a music performance Directed by Santiago Quintana<br/>co-produced with Evan J Thompson</p>
  <p>november 5th at Facility Theater, Chicago IL - <a href="https://www.eventbrite.com/e/o-death-facility-theatre-tickets-439655239657">tickets</a><br/>november 11th at Color Club, Chicago IL - <a href="https://www.eventbrite.com/e/o-death-color-club-tickets-439205313917" target="_blank" rel="noreferrer">tickets</a></p>
  <p><NavLink to="/o-death/program-notes">program notes</NavLink></p>
    <div className="image-container">
      <img src={odeath} alt="A.I. generated skeleton holding a banjo in a foggy wetland" />
    </div>
    <p>o death is an electroacoustic treatment of North Atlantic traditional/folk and old time music about death. In the show we meet Death in the mountains, travel to Britain by ship, get lost in southern Spain, take a detour to Mexico, and return to the United States just in time to twirl with those beyond the veil. We tell tales of those who have past, share foreboding dreams of dead lovers, honor the departed, defy death itself, and dance with the devil.</p>
  </>
)

export const Ngn = () => (
  <>
    <h2>ngn</h2>
    <div className="image-container">
      <img src={ngnCover} alt="distressed depiction of santiago grimacing" />
    </div>
    <p><a href="https://soundcloud.com/san3091/sets/ngn-1?si=abfff4e0e3c545d9b36b379210f196b8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">listen on soundcloud</a></p>
    <p>ngn (pronounced ‘engine’) is an album of snarky digital hardcore techno scrapbook produced during pandemic isolation. It stitches together deep anger, nonchalant sass, online life, and the need for musical violence as an escape hatch from reality.</p>
  </>
)

export const Experiments = () => (
  <>
    <h2>experiments</h2>
    <p>My creative projects stem from a constant experimentation with a variety of media. I am particularly fond of no-input mixing to create resonant noise. This is an example of what that sounds like. It’s improvisational, immediate, and collaborative. Flow state vibes.</p>
  <p><a href="https://video.squ1nt.social/w/sc4gNBDzN88C5xbYxx4SCQ">here's a noise set i played a while ago</a></p>
  </>
)

export const ODeathProgramNotes = () => (
  <>
    <h2>o death program notes</h2>
    <h3>act 1</h3>
      <p><strong>i'll fly away</strong><br/> north american hymn written in 1929 by Albert E. Brumley</p>
      <p><strong>death and the lady</strong><br/> this ballad was printed on a broadside by J. Deacon sometime between 1683 and 1700. it was printed as <em>The Great Messenger of Mortality, or a Dialogue betwixt Death and a Lady.</em></p>
      <p><strong>cluck, old hen</strong><br/> appalachian tune, dates uncertain. earliest reported transcription dates from 1886</p>
      <p><strong>o death</strong><br/> traditional Appalachian folk song generally attributed to the musician and Baptist preacher Lloyd Chandler, but it was likely taken or adapted from folk songs already existing in the region. encounters with a personified "Death" featured in traditional English songs which possibly date to the 14th century.</p>
      <p><strong>undone in sorrow</strong><br/> song by Ola Belle Reed (1916 - 2002)</p>
    <h3>act 2</h3>
      <p><strong>living by the water</strong><br/> song by Anne Briggs written in 1971</p>
      <p><strong>three score and ten</strong><br/> broadside ballad commemorating a tragic storm off Grimsby and Hull in February 1889, here sung as a shanty.</p>
      <p><strong>lowlands</strong><br/> most likely a fragment of an Anglo-Scots ballad, full form forgotten, that lived on among British sailors who passed it on to longshoremen in the Gulf ports. it has often been found in tradition in Britain and USA but always as a sailor shanty. here sung as a ballad inspired by Anne Briggs' rendition and other field recordings, which is likely closer to its original form before it took to sea.</p>
      <p><strong>he moved through the fair</strong><br/> traditional Irish folk song of unknown origin. first collected and published in 1909 in Herbert Hughes' <em>Irish Country Songs.</em></p>
      <p><strong>health to the company</strong><br/> traditional Irish song, here sung as a shanty. the earliest written examples date from 1875, but at least one source claims it was performed as early as 1836. it was particularly popular in Ireland and Scotland in the early-to-mid 19th century, which both saw a great deal of emigration in that era due to unemployment, evictions, and famine.</p>
    <h3>act 3</h3>
      <p><strong>por soleá</strong><br/> original composition with lyrics from flamenco song <em>yo no le temo a la muerte</em> - i'm not afraid of death. Samples taken from flamenco legends Camaron de la Isla, La Paquera de Jerez, and Concha Buika.</p>
      <p><strong>barca de oro</strong><br/>by Arcadio Zúñiga y Tejeda arrangement by Andrés Penella Gómez</p>
    <h3>act 4</h3>
      <p><strong>long time traveling (white)</strong><br/>north american hymn normally called <em>white</em> in tribute to Benjamin Franklin White, compiler of <em>The Sacred Harp</em> (1844). Arrangement by Anna & Elizabeth</p>
      <p><strong>i'll fly away</strong></p>
  </>
)
