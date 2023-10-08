
import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import {  deleteDoc } from "firebase/firestore";
import { firestore } from '../../config/Firebase';
export default function Login() {
    const [studename,setUserName]=useState("")
    const [ROLL,setRoll]=useState("")

    const Addinfo=async(e)=>{
    const id=Math.random().toString().slice(2);
    e.preventDefault();
   
    await deleteDoc(doc(firestore, "studentName", id));
        await setDoc(doc(firestore, "studentName",id), {
            id:id,
            studentName:studename,
            Roll: ROLL,
       
          });
        


    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert("your form succesfully submited")
     
    }
  return (
<div className='py-5'>
<div className="container-fluid">
    <div className="row">
        <div className="col col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card py-5 ">
                <div className='text-center'><h2 className='color-primary'>Student Attendance</h2></div>
                <form onSubmit={handlesubmit} >
                    <div className="row">
                        <div className="col mb-3 m-5">
                       <input type="text"  placeholder='Enter your name'  className='form-control' required onChange={(e)=>{ setUserName(e.target.value)}}/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3 m-5">
                       <input type="Tell"  placeholder='Phone Number' className='form-control' required onChange={(e)=>{setRoll(e.target.value)}}/>

                        </div>
                    </div>
                  
                    <div className="row ">
                        <div className="col mb-3 m-5">
               <button className='btn btn-primary w-100' onClick={Addinfo}>Add </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</div>

  )
}
