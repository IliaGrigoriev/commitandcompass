import React from "react";

import './css/contact.css'

export default function Contact() {
    return (
        //<!-- From Uiverse.io by gharsh11032000 --> 
        <div className="contact-form-container">
            <form className="form">
            <div className="form-group">
                <label for="email">Your Email</label>
                <input type="text" id="email" name="email" required=""/>
            </div>
            <div className="form-group">
                <label for="textarea">Your Message</label>
                <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
            </div>
            <button className="form-submit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}