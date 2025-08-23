import './css/neo_hover_button.css'

export default function NeoHoverButton({name}) {
    return (
        <button className="hover_button" id="btn">{name}</button>
    )
}