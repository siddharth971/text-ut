import React, { useState } from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    background: "black",
    color: "white"
  })

  const [myBtn, setBtn] = useState("Dark Mode");

  const btnChange = () => {
    if (myStyle.color === "white") {
      setBtn("Black Mode")
      setMyStyle({

        color: "black",
        background: "white"
      }
      )
    } else {
      setBtn("White Mode");
      setMyStyle({

        color: "white",
        background: "black"
      }
      )
    }
  }
  return (
    <div>
      <div className="container my-3 p-5 " style={myStyle}>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item " >
            <h2 className="accordion-header">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
        <button className=" btn btn-light my-2" onClick={btnChange} >{myBtn} </button>
      </div>
    </div>
  )
}


