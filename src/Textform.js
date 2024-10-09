import React,{useState} from 'react'

export default function Textform(props) {
  const handleupclicked =()=>{
   let newtext=text.toUpperCase()
    settext(newtext)
  }

  const changeevent =(e)=>{
    settext(e.target.value)
   
 
  }
  const [text,settext]= useState('');

  return (
    <>
  
      <h1>{props.heading}</h1>
      <div className='container'>
       <div className="form-group mb-3">
    <label htmlFor="exampleFormControlTextarea1">Enter the text</label>
    <textarea className="form-control" value={text} onChange={changeevent} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  </div>
  <div className='container'>
   <h2>{text.split(" ").length} words {text.length} charcters</h2>
  </div>
  <button className='btn btn-primary' onClick={handleupclicked}>convert to uppercase</button>
  </>
  )
}
