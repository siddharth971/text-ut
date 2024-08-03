import React from "react";
import { useState } from "react";

function TextForm(props) {


    let [text, setText] = useState('enter text hare');
    let handleUp = (event) => {
        console.log(text);
        setText(event.target.value);

    }
    let handleOn = (event) => {
        console.log("on click");
        setText(text.toUpperCase());
        console.log()
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
