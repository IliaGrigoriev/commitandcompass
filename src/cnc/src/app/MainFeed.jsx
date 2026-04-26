import './css/hover_card_layout.css'
import './css/sidebarpages.css'

import logo from './svg/commit_compass_logo.svg'

import NeoHoverCard from "./gadgets/NeoHoverCard";

export default function MainFeed() {
    return (
        <div className='sidebarpage-container'>
            <div className="flex-grid">
                <div className="grid-item"><NeoHoverCard hover_name={'Machine Learning'}/></div>
                <div className="grid-item"><NeoHoverCard hover_name={'Machine Learning'} imageSrc={logo} /></div>
                <div className="grid-item"><NeoHoverCard hover_name={'Machine Learning'}/></div>
                <div className="grid-item"><NeoHoverCard hover_name={'Machine Learning'}/></div>
                <div className="grid-item"><NeoHoverCard hover_name={'Machine Learning'}/></div>
                <div className="grid-item"><NeoHoverCard hover_name={'Machine Learning'}/></div>
                <div className="grid-item"><NeoHoverCard hover_name={'Machine Learning'}/></div>
            </div>
        </div>
    );
}