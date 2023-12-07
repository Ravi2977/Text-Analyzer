import React,{useState} from 'react'



export default function TextForm(props) {
    const[text, setText] = useState('');
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleRemoveExtraSpaces=()=>{
        let newText = text.split(" ");
        let s="";
        for(let i = 0;i<newText.length;i++){
           if(newText[i] ===''){
               continue
           }
           else{
            s+=newText[i]+" ";
           }
        }
        setText(s);
    }

    const handleOnChange=(event)=>{
        console.log("HandleOn Chnaged");
        setText(event.target.value);
    }
    const handleClearText=()=>{
        setText("");
    }
    return (
        <div>

            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
                </div>
               <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
               <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert To LowerCase</button>
               <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces}>Reamove Extra Spaces</button>
               <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length -1} words and {text.length} charecters</p>
                <p>{(0.008*text.split(" ").length)-0.008} minutes to read </p>
                <h2>Privew</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
 