import './gadgets/css/coding_bear.css'

import HorizontalDivider from './gadgets/HorizontalDivider';
import TravelEmoji       from './gadgets/TravelEmoji';
import BackgroundImage   from './gadgets/BackgroundImage';

const base = import.meta.env.BASE_URL; // "/"
const coding_bear = `${base}photos/cozy_coding_bear.png`;

export default function CodersGarden() {
    return (
        <>
        <BackgroundImage image={coding_bear}/>
        <div className="sidebar-content">
            dlskdlksdl
            <HorizontalDivider 
              label = {
                      <>
                        <TravelEmoji mode="camper" /> (Germany) Aachen → Cologne → Bremen → (Sweden) Malmö
                      </>
                    } 
            />
            <HorizontalDivider 
              label = {
                      <>
                        <TravelEmoji mode="camper" /> (Germany) Aachen → Cologne → Bremen → (Sweden) Malmö
                      </>
                    } 
            />
        </div>
      </>
    );
}