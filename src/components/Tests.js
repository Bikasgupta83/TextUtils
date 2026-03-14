import React, { useState } from 'react';

export default function Tests() {

    const [mode, setMode] = useState("Dark Mode");
    const [borderColor,setBorderColor] = useState("black");

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const toggle = () => {

        if (myStyle.color === "black") {

            setMyStyle({
                color: "white",
                backgroundColor: "black",
            });

            setMode("Light Mode");
            setBorderColor("white");

        } else {

            setMyStyle({
                color: "black",
                backgroundColor: "white",
            });

            setMode("Dark Mode");
            setBorderColor("black");
        }
    }

    return (
        <>
            <div
                className="container-fluid"
                style={{
                    border: `2px solid ${borderColor}`,
                    padding: "20px",
                    ...myStyle
                }}
            >

                <h2>Testing Dark Mode Or Light Mode</h2>

                <div className="row p-3">

                    <div className="col-4" style={{ border: `1px solid ${borderColor}` }}>
                        <img src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/FijNEJSVsAAjoBM.png" alt="img1" className="img-fluid"/>
                    </div>

                    <div className="col-4" style={{ border: `1px solid ${borderColor}` }}>
                        <img src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/FijNEJSVsAAjoBM.png" alt="img2" className="img-fluid"/>
                    </div>

                    <div className="col-4" style={{ border: `1px solid ${borderColor}` }}>
                        <img src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/FijNEJSVsAAjoBM.png" alt="img3" className="img-fluid"/>
                    </div>

                </div>

                <button onClick={toggle} className='btn btn-primary'>
                    {mode}
                </button>

            </div>
        </>
    );
}