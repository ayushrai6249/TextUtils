import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length > 0) props.showAlert(": Converted to Uppercase", "success");
        else props.showAlert(": Text is Empty", "warning")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length > 0)
            props.showAlert(": Converted to Lowercase", "success");
        else props.showAlert(": Text is Empty", "warning")
    }
    const handleClr = () => {
        let newText = "";
        setText(newText);
        if (text.length > 0)
            props.showAlert(": Text has been cleared", "success");
        else props.showAlert(": Text is Empty", "warning")
    }
    const handleClrSpace = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        if (text.length > 0)
            props.showAlert(": Extra spaces has been removed", "success");
        else props.showAlert(": Text is Empty", "warning")
    };
    const handleCopyText = () => {
        if (text.length > 0) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    props.showAlert(": Text has been copied to clipboard", "success");
                })
                .catch((err) => {
                    props.showAlert(": Failed to copy text", "error");
                });
        } else {
            props.showAlert(": Text is empty", "warning");
        }
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.info}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Lowercase</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleClrSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleCopyText}>Copy</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleClr}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(" ").filter(word => word !== "").length} words and {text.length} charactors
                </p>
                <p>
                    {text.split(" ").length * 0.008} minutes to read
                </p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0 ? text : "Enter Text To Preview"}
                </p>
            </div>
        </>
    )
}
