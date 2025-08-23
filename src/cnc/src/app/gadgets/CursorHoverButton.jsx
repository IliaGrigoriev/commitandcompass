import './css/cursor_hover_button.css'

export default function CursorHoverButton({name}) {
    return(
        //<!-- From Uiverse.io by satyamchaudharydev --> 
        <button className="button" data-text="Awesome">
            <span class="actual-text">&nbsp;{name}&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;{name}&nbsp;</span>
        </button>
    )
}