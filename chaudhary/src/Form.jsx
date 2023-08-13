import React from 'react';
import { useState } from 'react';

const Form = () => {
  const  [data,setData]=useState({
    language:"",
    question:"",
    
  });
  const InputEvent=(event)=>{
    const{name,value}=event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,

      };
    });
  };
  const formSubmit=(e)=>{
    e.preventDefault();
    console.log('Form submitted:', data);
    alert(`${data.language} ${data.question}  `);
  }
  return (
    <>
<div className="my-5">
    <h1 className="text-center">Ask Me Question For Checking My <strong className="brand-name">Skills </strong></h1>
   </div>
   <div className="container contact_div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={formSubmit}>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Input Language Type</label>
  <input type="text" 
  class="form-control" 
  id="formGroupExampleInput"
   name="language"
   value={data.language}
   onChange={InputEvent}
   placeholder="Name of the language "/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Ask Question</label>
  <input type="text"
   class="form-control" 
   id="formGroupExampleInput2"
   name="question"
   value={data.question}
   onChange={InputEvent}
   placeholder="Text me question"/>
</div>
<div class="col-auto">
    <button type="submit" class="btn-get-started">Submit</button>
  </div>
  </form>
     

      </div>
      </div>
      </div>



    
    
    </>
  )
}

export default Form