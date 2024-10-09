import React from 'react';

import './Login.css'

export default function Login() {
  return (
    <div>
       <div>
      <div className="auth-fluid">
    
    <div className="auth-fluid-form-box">
        <div className="align-items-center d-flex h-100">
            <div className="card-body" >

               
                <div className="auth-brand text-center text-lg-start">
                    <a  className="logo-dark">
                     <h2>BT</h2>
                    </a>
                    <a  className="logo-light">
                        BT
                    </a>
                </div>

    
             
                <h4 className="mt-0">Sign In </h4>
                <p className="text-muted mb-4">Enter your Phone and password to access account. </p>

                
                    <div className="mb-3">
                        <label htmlFor="emailaddress" className="form-label">Phone No <sup >*</sup></label>
                        <input className="form-control" type="number" id="emailaddress" required="" placeholder="Enter  phone no" />
                    </div>
                    <div className="mb-3">
                        
                        <label htmlFor="password" className="form-label">Password </label>
                        <input className="form-control" type="password" required="" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3 text-center" >
                        <div className="form-check">
                            
                            <label className="form-check-label text-danger "  htmlFor="checkbox-signin"></label>
                        </div>
                    </div>
                    <div className="d-grid mb-0 text-center">
                        <button className="btn btn-primary" type="submit" ><i className="mdi mdi-login"></i> Log In  </button>
                    </div>

                    <div className="mt-3 text-center">
                     
                      <a >Reset Password</a>

                     
                    
                    </div>
                    <div id="standard-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header modal-colored-header bg-primary">
                                    <h4 className="modal-title" id="standard-modalLabel">Reset / UserName</h4>
                                    <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-hidden="true"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                       
                                        <div className="col-md-12 mb-2">
                                            <label >PhoneNumber  <sup >*</sup></label>
                                        </div>
                                        <div className="col-md-12 mb-2">
                                           <input type="text" className="form-control"   autoComplete="off"   placeholder="Enter PhnNo" maxlength="10" 
                                               onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"/>
                                        </div>
                                        <div className="col-md-12 mb-2">
                                            <label >PassWord<sup >*</sup></label>
                                        </div>
                                        <div className="col-md-12 mb-2">
                                           <input type="text" className="form-control" autoComplete="off"  placeholder="Enter Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                 
                                    <button type="button" id="btnclose" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" >Save changes</button>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
             
                <footer className="footer footer-alt">
                 
                </footer>

            </div> 
           
        </div>  
    </div>
   
  
    <div className="auth-fluid-right text-center">
        <div className="auth-user-testimonial">
            <h2 className="mb-3">We Are not here to complete,<br/>We are Here to rule</h2>
           
            
            <p>
                 - Bangalore Taxi
            </p>
        </div> 
    </div>
    
</div>
    </div>
    </div>
  )
}


// <div className="card-body">

              
// <div className="auth-brand text-center text-lg-start">
//     <a  className="logo-dark">
//      <h2>LOGO</h2>
//     </a>
//     <a  className="logo-light">
//         LOGO
//     </a>
// </div>



// <h4 className="mt-0">Sign In </h4>
// <p className="text-muted mb-4">Enter your email address and password to access account. </p>



//     <div className="mb-3">
//         <label >PhoneNumber  <sup >*</sup></label>
//         <input type="text" className="form-control"  autoComplete="off"  placeholder="Enter PhnNo" maxlength="10" onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"/>
//     </div>
//     <div className="mb-3">
     
//         <label >Password<sup >*</sup></label>
//         <input type="text" className="form-control"   autoComplete="off" placeholder="Enter Password"/>
//     </div>
//     <div className="mb-3 text-center" >
//         <div className="form-check">
            
//             <label className="form-check-label text-danger "  htmlFor="checkbox-signin"></label>
//         </div>
//     </div>


//     <div className="mt-3 ">

//       <button className="btn btn-primary" type="button"  >Cancel</button>
//       <button className="btn btn-primary" type="button"  >Save Password</button>
   
//     </div>
//     <div id="standard-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <div className="modal-header modal-colored-header bg-primary">
//                     <h4 className="modal-title" id="standard-modalLabel">Reset / UserName</h4>
//                     <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-hidden="true"></button>
//                 </div>
//                 <div className="modal-body">
//                     <div className="row">
                       
//                         <div className="col-md-12 mb-2">
                           
//                         </div>
//                         <div className="col-md-12 mb-2">
                          
//                         </div>
//                         <div className="col-md-12 mb-2">
                           
//                         </div>
//                         <div className="col-md-12 mb-2">
                         
//                         </div>
//                     </div>
//                 </div>
//                 <div className="modal-footer">
                 
//                     <button type="button" id="btnclose" className="btn btn-light" data-bs-dismiss="modal">Close</button>
//                     <button type="button" className="btn btn-primary" >Save changes</button>
                   
//                 </div>
//             </div>
//         </div>
//     </div>

// <footer className="footer footer-alt">
 
// </footer>

// </div>  