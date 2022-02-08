
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';


function App() {
  const [mode,setmode]=useState("light");
  const [enabletext,setUpdateText]=useState("Enable dark mode");


 

  const toggleState=()=>{
    if(mode==="light"){
     
      setmode("dark");
      setUpdateText("Enable light mode")
      document.body.style.backgroundColor='grey';

    }else{
      setmode("light");
      setUpdateText("Enable Dark mode")
      document.body.style.backgroundColor='white';
    }
  }



  return (
    <>

    <Navbar title="Hamnas" mode={mode} enabletext={enabletext} toggleState={toggleState}></Navbar>
    <div className='container'>
    <TextArea  mode={mode} head="Text Area"/> 
    </div>

    {/* <About /> */}

   
   </>
   
  );
}

export default App;
