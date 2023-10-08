// import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import {  deleteDoc } from "firebase/firestore";
import { firestore } from '../../config/Firebase';
export default function Login() {
    const [userName,setUserName]=useState("")
    const [tell,setTell]=useState("")
    const [userAddress,setuserAddress]=useState("")
    const Addinfo=async(e)=>{
    const id=Math.random().toString().slice(2);
    e.preventDefault();
   
    await deleteDoc(doc(firestore, "AddUsers", id));
        await setDoc(doc(firestore, "AddUsers",id), {
            id:id,
            name:userName,
            PhoneNumber : tell,
            country: userAddress
          });
        


    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert("your form succesfully submited")
        console.log(userName)
        console.log(tell)
        console.log(userAddress)
    }
  return (
<div className='py-5'>
<div className="container-fluid">
    <div className="row">
        <div className="col col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card py-5 ">
                <div className='text-center'><h2 className='color-primary'>ADD Information</h2></div>
                <form onSubmit={handlesubmit} >
                    <div className="row">
                        <div className="col mb-3 m-5">
                       <input type="text"  placeholder='Enter your name'  className='form-control' required onChange={(e)=>{ setUserName(e.target.value)}}/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3 m-5">
                       <input type="Tell"  placeholder='Phone Number' className='form-control' required onChange={(e)=>{setTell(e.target.value)}}/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3 m-5">
                       <input type="Address"  placeholder='Address' className='form-control' required onChange={(e)=>{setuserAddress(e.target.value)}}/>

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
