import React from 'react';
import { useState } from 'react';

export default function TextArea(props) {


    const [text, setText] = useState('');

    const AddNewText = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const AddNewLowerText = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ClearText = () => {
        let newText = "";
        setText(newText);
    }

    const onChangevalue = (e) => {
        setText(e.target.value)

    }

    const CopyText=()=>{
        var val=document.getElementById('exampleFormControlTextarea1');
        val.select();
        navigator.clipboard.writeText(val.value);

    }
   const RemoveSpace=()=>{
       let remove=text.split(/[  ]+/);
       setText(remove.join(" "))

   }

   const date=new Date().getDate();
   const Time=new Date().toLocaleTimeString();



    return (
        <React.Fragment>
             <div className='Container my-3' >
               <h5 style={{color:props.mode==='dark'?'White':'Black'}}>Time is: {Time}</h5>
               <p style={{color:props.mode==='dark'?'White':'Black'}}>Todays date is {date}</p>
            </div>

            <div className='Container'>
                <div className="mb-3">
                    <label style={{color:props.mode==='dark'?'White':'Black'}} for="exampleFormControlTextarea1" className="form-label">{props.head}</label>
                    <textarea className="form-control" value={text} onChange={onChangevalue} 
                    style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
                    id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button  type="button" onClick={AddNewText} className="btn btn-danger mx-3">Click To Upper Case</button>
                <button  type="button" onClick={AddNewLowerText} className="btn btn-danger mx-3 ">Click To Lower  Case</button>
                <button  type="button" onClick={ClearText} className="btn btn-primary mx-3">Clear Text</button>
                <button  type="button" onClick={CopyText} className="btn btn-primary mx-3">Copy Text</button>
                <button  type="button" onClick={RemoveSpace} className="btn btn-primary mx-3">Remove Extra Space</button>
            </div>

            <div className='Container my-3' >
                <h4 className='my-2'  style={{color:props.mode==='dark'?'White':'Black'}}>Your text Summary Comes Here!!</h4>
                <p style={{color:props.mode==='dark'?'White':'Black'}}>
                    Words: {text.split(' ').length - 1}
                    Characterstics:{text.length}
                </p>
            </div>

            <div className='Container my-3' >
                <h4  style={{color:props.mode==='dark'?'White':'Black'}} className='my-2'>Preview</h4>
                <p style={{ color: "red", backgroundColor: "yellow" }}>
                    {text}
                </p>
            </div>

           

        </React.Fragment>
    );
}
