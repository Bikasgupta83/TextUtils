import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [copyBtnText, setCopyBtnText] = useState("Copy Text");
    
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopyBtnText("Copied!");
            
                setTimeout(() => {
                    setCopyBtnText("Copy Text");
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }
    const handleClear = () =>{
        const newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <h1>{props.heading}</h1>
            
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder="Enter Text Here" onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button type="button" className='btn btn-primary mx-2' onClick={handleCopy}>{copyBtnText}</button>
            <button type="button" className='btn btn-primary mx-2' onClick={handleClear}>Clear Text</button>

            <div className="container my-2">
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
            </div>
        </>
    );
};