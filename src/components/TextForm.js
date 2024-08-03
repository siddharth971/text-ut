import React from "react";
import { useState } from "react";

function TextForm(props) {

    const [text,setText] = useState('enter text hare');
    const handleUp = () => {
        console.log(text);
        setText = "You have click in upper text click";
    }
    const handleOn = () => {
        console.log("on click")
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleUp} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleOn}> to UpperCase</button>
            </div>
        </>
    );
}

export default TextForm;
