

import './css/underline_hover_button.css'

export default function UnderlineHoverButton({hover_name, onUserClick}) {
    return(
        //<<!-- From Uiverse.io by ArturCodeCraft --> 
        <a className="menu__link" onClick={onUserClick}>{hover_name}</a>
    )
}