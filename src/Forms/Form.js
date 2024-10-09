import React from 'react'
//import '../assests/css/boostrap.min.css'
import { useState } from 'react'
 import Validation from './Validation';

 function FormValidation() {

  const [values,SetValues]=useState({
    Name:'',
    lastName:'',
    Age:'',
    Password:'',
    Email:'',
    zip:''
  })

  const [errors,seterrors]=useState({});

  function handleinput(event){
  debugger;

    const newobj={...values,[event.target.name]:event.target.value}
    SetValues(newobj)
    seterrors(Validation(values));
  }

function HandleValidation(event){
  debugger;
event.preventDefault();

 seterrors(Validation(values));
  
}




  return (
    <>
    <div>
      <form onSubmit={HandleValidation}>
        <div className='container w-50'>
        <div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="Name">Name :</label>
    <input type="text" className="form-control" name="Name" placeholder="Enter Name" onChange={handleinput}/>
    {errors.Name && <p style={{color:'red'}}>{errors.Name}</p>}
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="lastName">LastName :</label>
    <input type="text" className="form-control" name="lastName" placeholder="Enter LastName" onChange={handleinput}/>
    {errors.lastName && <p style={{color:'red'}}>{errors.lastName}</p>}
  </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="age"> AGE :</label>
    <input type="text" className="form-control" name="Age" placeholder="Enter Name" onChange={handleinput}/>
    {errors.Age && <p style={{color:'red'}}>{errors.Age}</p>}
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="PASSWORD">PASSWORD :</label>
    <input type="text" className="form-control" name="Password" placeholder="Enter LastName" onChange={handleinput}/>
    {errors.Password && <p style={{color:'red'}}>{errors.Password}</p>}
  </div>
  </div>
 
  <div className="form-row">
  <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" name="Email" placeholder="Email" onChange={handleinput}/>
     
    </div>
   
    <div className="form-group col-md-6">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" name="zip" onChange={handleinput}/>
      {errors.zip && <p style={{color:'red'}}>{errors.zip}</p>}
    </div>
  </div>

  
  <button type="submit" className="btn btn-primary">validate</button>
        </div>
  
</form>
    </div>
    </>
  )


}

export default FormValidation;
