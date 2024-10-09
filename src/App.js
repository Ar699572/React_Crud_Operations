
import './App.css';
import Navbar  from './Navbar';
 import Aboutus from './Aboutus';
import React,{useState}  from 'react';

import {
  BrowserRouter ,

  Route,Routes
} from "react-router-dom";
// import Home from './Home';
import Form from './Forms/Form'
// import DemoForm from './Demoform';

import Dashboard from './components/index'
// import Textform from './Textform';
//  import Login  from './Login';
// import Edit from './components/Edit';



function App() {

  const tooglemode =()=>{
    debugger;
    if(mode==='light'){
      console.log('dark')
      setmymode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setmymode('light');
      document.body.style.backgroundColor='white';
    }
  }
 
  const [mode,setmymode]=useState('light');
 
  return (
<>



<BrowserRouter>
<Navbar title='KK' mode={mode}  ontogglechange={tooglemode}/>
        <Routes>
          <Route path="/about" element={<Aboutus />} />
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
  
    </BrowserRouter>


<div className='container my-3'>
  {/* <Dashboard/> */}
  {/* <Edit/> */}
  {/* <Aboutus/> */}
 
{/* <DemoForm/> */}
{/* <Textform heading="Enter the text here"/> */}


</div>


    </>
  );
  
}






export default App;
