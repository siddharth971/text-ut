import { useState } from "react";
import React from "react";

function TextForm(props) {
    function handleUpchange() {
        console.log("button is click")
    }
    const [text, settext] = useState('enter text hare')
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleUpchange} id="myBox" rows="8"></textarea>
            </div>
        </>
    );
}

export default TextForm;
