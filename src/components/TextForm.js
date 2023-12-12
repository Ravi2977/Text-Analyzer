import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("changed to Upper Case ", 'success')
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("changed to lower case ", 'success')
    }
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(" ");
        let s = "";
        for (let i = 0; i < newText.length; i++) {
            if (newText[i] === '') {
                continue
            }
            else {
                s += newText[i] + " ";
            }
        }
        props.showAlert("Removed Extra Spaces", 'success')
        setText(s);
    }
    const handleCapitalise = () => {
        let newText = text.split(" ");
        let s = "";
        for (let i = 0; i < newText.length; i++) {
            if (s === '') {
                s = newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
            }
            else if (newText[i] !== "") {
                s = s + " " + newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
            }

        }
        props.showAlert("Capitalised", 'success')
        setText(s);
    }
    const handleSentenceStyle = () => {
        let s = '';
        let newText = text.split('.');

        for (let i = 0; i < newText.length; i++) {
            if (newText[i] !== "") {
                if (newText[i][0] !== ' ') {
                    s = s + newText[i][0].toUpperCase() + newText[i].slice(1).toLowerCase() + '.';
                } else {
                    s += newText[i][0] + newText[i][1].toUpperCase() + newText[i].slice(2).toLowerCase() + '.';
                }
            }
        }
        props.showAlert("Changed to Sentence Case", 'success')
        setText(s);
    }

    const handleOnChange = (event) => {
        console.log("HandleOn Chnaged");
        setText(event.target.value);
    }
    const handleClearText = () => {
        setText("");
        props.showAlert("cleared ", 'success')
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard ", 'success')
        document.getSelection().removeAllRanges()
    }
    return (
        <div className=''>
            <div className="container mt-5 p-3">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'rgb(39, 41, 40)' }}>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(39, 41, 40)' : 'white', color: props.mode === 'dark' ? 'white' : 'rgb(39, 41, 40)' }} value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalise}>Capitalise</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceStyle}>Sentence Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Reamove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'rgb(39, 41, 40)' }}>
                <h2 >Your Text Summery</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} charecters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read </p>
                <h2>Privew</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </div>
    )
}
