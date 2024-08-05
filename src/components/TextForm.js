import React from "react";
import { useState } from "react";

function TextForm(props) {


    let [text, setText] = useState('Enter text hare');
    let handleOn = (event) => {
        console.log(text);
        setText(" ");
        setText(event.target.value);
     

    }
    let handleUp = (event) => {
        console.log("on click");
        setText(text.toUpperCase());
        console.log()
    }
    let handleLo = (event) => {
        console.log("on click");
        setText(text.toLocaleLowerCase());
        console.log()
    }
    let clearTxt = (event) => {
        console.log("on click");
        setText("");
        console.log()
    }

    return (
        <>
            <div className=" container my-3" >
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOn} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUp}> to UpperCase</button>
                <button className="btn btn-danger my-3 mx-3 btn-outline-light " onClick={handleLo}> to LowerCase</button>
                <button className="btn btn-info my-3 mx-3 btn-outline-light " onClick={clearTxt}> Clear Text</button>
            </div>

            <div className="container">
                <h1>Your text summery</h1>
                <p>your word id {text.split(" ").length} and character is {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;
