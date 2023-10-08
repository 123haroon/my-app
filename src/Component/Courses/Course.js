// import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import {  deleteDoc } from "firebase/firestore";
import { firestore } from '../../config/Firebase';
export default function Course() {
    const [userCourse,setUserCourse]=useState("")

    const Addinfo=async(e)=>{
    const id=Math.random().toString().slice(2);
    e.preventDefault();
   
        await setDoc(doc(firestore, "Coursess",id), {
            id:id,
            coursename:userCourse,
    
          });
        


    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert("your form succesfully submited")
        // console.log(userName)
   
    }
  return (
<div className='py-5'>
<div className="container-fluid">
    <div className="row">
        <div className="col col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card py-5 ">
                <div className='text-center'><h2 className='color-primary'>ADD Course</h2></div>
                <form onSubmit={handlesubmit} >
                    <div className="row">
                        <div className="col mb-3 m-5">
                       <input type="text"  placeholder='Course Name'  className='form-control' required onChange={(e)=>{ setUserCourse(e.target.value)}}/>

                        </div>
                    </div>
                
               
                    <div className="row ">
                        <div className="col mb-3 m-5">
               <button className='btn btn-primary w-100' onClick={Addinfo}>Add  Course</button>

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
