import odeath from './img/o-death-medium.png'
import ngnCover from './img/ngn-cover.png'

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
    <p>Ngn (pronounced ‘engine’) is an album of snarky digital hardcore techno scrapbook produced during pandemic isolation. It stitches together deep anger, nonchalant sass, online life, and the need for musical violence as an escape hatch from reality.</p>
  </>
)

export const Experiments = () => (
  <>
    <h2>experiments</h2>
    <p>My creative projects stem from a constant experimentation with a variety of media. I am particularly fond of no-input mixing to create resonant noise. This is an example of what that sounds like. It’s improvisational, immediate, and collaborative. Flow state vibes.</p>
  <p><a href="https://video.squ1nt.social/w/sc4gNBDzN88C5xbYxx4SCQ">here's a noise set i played a while ago</a></p>
  </>
)

