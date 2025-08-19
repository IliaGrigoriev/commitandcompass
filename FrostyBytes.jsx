import '../subpages_layout/layout.css'

import Block             from '../subpages_layout/Block.jsx';
import Row               from '../subpages_layout/Row.jsx';
import MapVisualization  from '../visualization/MapVisualization.jsx';
import HorizontalDivider from '../gadgets/HorizontalDivider.jsx';
import TravelEmoji       from '../gadgets/TravelEmoji.jsx';
import BackgroundImage   from '../gadgets/BackgroundImage.jsx';


import frosty_bytes from './json_maps/frosty_bytes.geo.json';

//import frosty_background from "/home/ilia/Pictures/cnc/images/frosty_bytes/background_frosty_modified.JPG"
//import frosty_background from "/home/ilia/Pictures/cnc/images/frosty_bytes/background_frosty.JPG"
import frosty_background from "/home/ilia/Pictures/cnc/images/frosty_bytes/background_frosty_spots_removed.JPG"
//import frosty_background from "/home/ilia/Pictures/cnc/images/frosty_bytes/background_frosty_filter_last.JPG"

import packing_citroen  from "/home/ilia/Pictures/cnc/images/frosty_bytes/aachen_bremen_malmo/IMG-20200221-WA0010.jpeg"
import bremen_video     from "/home/ilia/Pictures/cnc/images/frosty_bytes/aachen_bremen_malmo/VID_20200222_181745.mp4";
import bremen_musicians from "/home/ilia/Pictures/cnc/images/frosty_bytes/aachen_bremen_malmo/rimg0317.jpg";
import bremen_knight    from "/home/ilia/Pictures/cnc/images/frosty_bytes/aachen_bremen_malmo/rimg0309.jpg";
import malmo_skysraper  from "/home/ilia/Pictures/cnc/images/frosty_bytes/aachen_bremen_malmo/IMG_20200223_141219.jpg";
import malmo_video      from "/home/ilia/Pictures/cnc/images/frosty_bytes/aachen_bremen_malmo/VID_20200223_134245.mp4";

import me_and_masja_farm       from "/home/ilia/Pictures/cnc/images/frosty_bytes/southern_sweden/IMG_20200224_115611.jpg"
import citroen_add_fueling_up  from "/home/ilia/Pictures/cnc/images/frosty_bytes/southern_sweden/IMG_20200224_220151.jpg"
import farm_video_1            from "/home/ilia/Pictures/cnc/images/frosty_bytes/southern_sweden/VID_20200224_113009.mp4"
import farm_video_2            from "/home/ilia/Pictures/cnc/images/frosty_bytes/southern_sweden/VID_20200224_113607.mp4"

import sundsvall_1 from "/home/ilia/Pictures/cnc/images/frosty_bytes/sundsvall/IMG_20200225_135538.jpg"
import sundsvall_2 from "/home/ilia/Pictures/cnc/images/frosty_bytes/sundsvall/IMG_20200225_141935.jpg"
import sundsvall_3 from "/home/ilia/Pictures/cnc/images/frosty_bytes/sundsvall/IMG_20200225_142014.jpg"
import sundsvall_4 from "/home/ilia/Pictures/cnc/images/frosty_bytes/sundsvall/IMG_20200225_135525.jpg"
import sundsvall_5 from "/home/ilia/Pictures/cnc/images/frosty_bytes/sundsvall/VID_20200225_105236.mp4"
import sundsvall_6 from "/home/ilia/Pictures/cnc/images/frosty_bytes/sundsvall/VID_20200225_110646.mp4"
import sundsvall_7 from "/home/ilia/Pictures/cnc/images/frosty_bytes/sundsvall/VID_20200225_134432.mp4"

import minus_27_1 from "/home/ilia/Pictures/cnc/images/frosty_bytes/minus_27/IMG_20200226_040646.jpg"
import minus_27_2 from "/home/ilia/Pictures/cnc/images/frosty_bytes/minus_27/VID_20200226_094220.mp4"
import minus_27_3 from "/home/ilia/Pictures/cnc/images/frosty_bytes/minus_27/VID_20200226_133619.mp4"
import minus_27_4 from "/home/ilia/Pictures/cnc/images/frosty_bytes/minus_27/IMG-20200226-WA0020.jpeg"

import ImageGallery from '../ImageGallery.jsx';

export default function FrostyBytes() {
  
  // Aachen -- Bremen
  const media_aachen_bremen = [
    { type: "image", src: packing_citroen,     orientation: "vertical", 
      description:  "Packing our stuff in Aachen, Germany to head North"},
    { type: "video", src: bremen_video,     orientation: "vertical", 
      description:  "The quality of the video is a bit poor, but it was such a pleasant evening in Bremen filled with magic street music of ..."},
    { type: "image", src: bremen_musicians, orientation: "vertical", 
      description : "This is a picture of Bremen musicians I took many years ago, probably around 2006." },
    { type: "image", src: bremen_knight,    orientation: "vertical", 
      description : "Celebrating Bremen’s medieval past is the statue of Duke Roland of Bremen, also often called just Roland. " 
      + "By displaying Roland, cities signaled allegiance to imperial authority of the Holy Roman Empire, claiming freedom from " 
      + "local feudal control in 1200-1400s. I took the picture also during the same trip in 2006." },
    { type: "image", src: malmo_skysraper,  orientation: "vertical", description : "Description 2" },
    { type: "video", src: malmo_video,      orientation: "vertical", description: "Our engagement video."}
  ];


  // Southern Sweden
  const media_southern_sweden = [
    { type: "image", src: citroen_add_fueling_up,  orientation: "horizontal", description : "Description 2" },
    { type: "image", src: me_and_masja_farm,       orientation: "horizontal", description : "Description 2" },
    { type: "video", src: farm_video_1,            orientation: "vertical", description: "Our engagement video."},
    { type: "video", src: farm_video_2,            orientation: "vertical", description: "Our engagement video."}
    // Add more images with their actual dimensions
  ];

  const sundsvall = [
    { type: "image", src: sundsvall_1, orientation: "horizontal", description : "Description 2" },
    { type: "image", src: sundsvall_2, orientation: "horizontal", description : "Description 2" },
    { type: "image", src: sundsvall_3, orientation: "horizontal", description : "Description 2" },
    { type: "image", src: sundsvall_4, orientation: "vertical", description : "Description 2" },
    { type: "video", src: sundsvall_5, orientation: "vertical", description: "Our engagement video."},
    { type: "video", src: sundsvall_6, orientation: "vertical", description: "Our engagement video."},
    { type: "video", src: sundsvall_7, orientation: "vertical", description: "Our engagement video."}
  ]


  const minus_27 = [
    { type: "image", src: minus_27_1, orientation: "vertical", description : "Description 2" },
    { type: "video", src: minus_27_2, orientation: "vertical", description: "Our engagement video."},
    { type: "video", src: minus_27_3, orientation: "vertical", description: "Our engagement video."},
    { type: "image", src: minus_27_4, orientation: "horizontal", description: "Our engagement video."}
  ]

  return (
    <>
    {/*
    <BackgroundImage
      image={frosty_background}
      focusX={0.5}        // center
      focusY={0.3}        // 30% from top
      fadeStrength={0.4}  // fade starts at 40% radius
    />
    */}
    <BackgroundImage
      image={frosty_background}/>

    <div className="page">


      {/* Taking off */}
      {/* ----------------------------------------------------------------------- */}
      <HorizontalDivider 
          label = {
                  <>
                    <TravelEmoji mode="camper" /> (Germany) Aachen → Cologne → Bremen 
                    → (Sweden) Malmö
                  </>
                } 
      />

      <Row>
        <Block maxWidth = {250} ><MapVisualization map_data = {frosty_bytes} width_in = {500} height_in = {500} scale_factor = {1} marginLeft={-140}/></Block>
        <Block>
          <Block>
          <div style={{ textAlign: 'justify' }}>
          <p>
            I must admit right away — the whole northern trip was a major rush, because we covered a distance of about 6,600 km 
            in a bit less than just two weeks. We started this trip in February 2020 in Aachen, Germany. I packed our things into 
            my Citroën C4 1.6 HDi with a 109-horsepower diesel engine and set off to pick up Natalya from the Fasching festivities 
            in Cologne, Germany. In Cologne after having loaded my happy Natalya, we took off in the direction of the distant Great White North.
          </p>
          <p>  
            We spent one night in a roadside hotel, and the next day stopped in Bremen for a short evening walk. The sweet twilight 
            of Bremen soothed us in so unexpectedly that I barely took any pictures, but I did capture ... with a short phone video. 
            I added two photos from my past visit to Bremen decades ago. Fun Fact Bremen: ... 
          </p>
          <p>  
            The same day around midnight after hopping over the Danish bridges (no ferries), we reached Malmö, Sweden, where we spent one night at 
            our friend's place. We spent the whole next day walking in Malmö exploring its streets designed in modern art and had a 
            great lunch in .. market. Fun Fact Malmö: ...
          </p>
          </div>
          </Block>
          <Row>
            <Block>
              <ImageGallery images={media_aachen_bremen} rowHeight={200} margin={8} />
            </Block>
          </Row>
        </Block>
      </Row>
      
      <Row>
        <Block maxWidth = {500}>
          <div style={{ textAlign: 'justify' }}>
           We left Malmö the next day when it was already getting dark, so after having cruised for a couple of hours through the 
           night forrests of southern Sweden, we stopped to search for a place to rest overnight. It was pretty late so there were 
           only few places we could book on a short notice. It turned out to be a very lovely farm stay in a small cozy cottage. Here is 
           a link to the farm: ... Many thanks for a warm welcome from the owner on such a short notice.
           </div>
        </Block>
          <Block>
              <ImageGallery images={media_southern_sweden} rowHeight={200} margin={8} />
          </Block>
      </Row>

      {/* Lapland */}
      {/* --------------------------------------------------------------------- */}
      
      <HorizontalDivider label={<><TravelEmoji mode="ship" /> (Sweden) Sundsvall</>} />
      <Row>
        <Block>
          <div style={{ textAlign: 'justify' }}>
          <p>Our next stop was Sundsvall, where we stayed in a ship hotel: ... Fun fact Sundsvall: ...</p>
          </div>
        </Block>
        <Row>  
          <Block>
            <ImageGallery images={sundsvall} rowHeight={200} margin={8} />
          </Block>
        </Row>
      </Row>
      
      {/* Lapland */}
      {/* --------------------------------------------------------------------- */}
      <HorizontalDivider label={<><TravelEmoji mode="hut" /> (Sweden/Finland) Lapland</>} />
      <Row>
        <Block >
            <ImageGallery images={minus_27} rowHeight={200} margin={8} />
        </Block>
        <Block maxWidth = {550}>
          <div style={{textAlign: 'justify'}}>
            <p>
              After Sundsvall I had a great idea to just keep on going until I get tiered and see how far we can get. 
              Eventually around 4 o'clock in the morning somewhere mid inside Lapland I decided to take a break. Natalya 
              was already long gone sleeping in the passanger seat, so I halted by a laplandish roadside parking spot 
              and followed her example. The temperature outside was -23 C°, so I left the engine running with the heater 
              on. Some couple of kilometers away right before I decided to stop the temperature showed -27°C. 
              Fun Fact: cold and warmer streams ... in Lapland...  
            </p>
            <p>
                The fairy tail raods of Lapland...
            </p>
          </div>
        </Block>
      </Row>

      {/* Norway Magaroya */}
      {/* --------------------------------------------------------------------- */}
      <HorizontalDivider label={<><TravelEmoji mode="terrain" /> (Norway) Honnigsvaag Magaroya</>} />

      {/* Norway Alta */}
      {/* --------------------------------------------------------------------- */}
      <HorizontalDivider label={<><TravelEmoji mode="terrain" /> (Norway) Alta</>} />


      {/* Norway Alta */}
      {/* --------------------------------------------------------------------- */}
      <HorizontalDivider label={<><TravelEmoji mode="terrain" /> (Finnland) Santa Claus village</>} />

      {/* Swedish lodges */}
      {/* --------------------------------------------------------------------- */}
      <HorizontalDivider label={<><TravelEmoji mode="terrain" /> Swedish lodges</>} />

      {/* (Dennmark) Kopenhagen */}
      {/* --------------------------------------------------------------------- */}
      <HorizontalDivider label={<><TravelEmoji mode="terrain" /> (Dennmark) Kopenhagen</>} />


    </div>
    </>
  );
}
