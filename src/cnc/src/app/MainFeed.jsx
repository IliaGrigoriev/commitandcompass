import './css/main_feed.css'

import logo from './svg/commit_compass_logo.svg'

import NeoHoverCard from "./gadgets/NeoHoverCard";

export default function MainFeed() {
    return (
        <div className='main-container'>
            <div className="six-by-six-grid">
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