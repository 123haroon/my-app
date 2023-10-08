import { doc, collection, deleteDoc, getDocs } from "firebase/firestore";

import React, { useEffect, useState } from 'react'
import { firestore } from "../../config/Firebase";


function Getdata() {
    const [documents, setDocuments] = useState([])
    const readData = async () => {
        const querySnapshot = await getDocs(collection(firestore, "AddUsers",));
        let array = []
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            array.push(data)
        });
        setDocuments(array)
        console.log(documents)
    }
    useEffect(() => {
        readData()
    }, [])
    const handledelete = async (id) => {
        await deleteDoc(doc(firestore, "Coursess", id))
    }
    console.log(documents);

    // const [document, setDocument] = useState([])
    // const readDat = async () => {
    //     const querySnapshot = await getDocs(collection(firestore, "Coursess",));
    //     let array = []
    //     querySnapshot.forEach((docs) => {
    //         let data = docs.data()
    //         array.push(data)
    //     });
    //     setDocuments(array)
    //     console.log(documents)
    // }
    // useEffect(() => {
    //     readDat()
    // }, [])
    // const handledelett = async (id) => {
    //     await deleteDoc(doc(firestore, "Coursess", id))
    // }
    // const [documentt, stDocumentt] = useState([])
    // const readDate = async () => {
    //     const querySnapshot = await getDocs(collection(firestore, "Students Attendance",));
    //     let array = []
    //     querySnapshot.forEach((docss) => {
    //         let data = docss.data()
    //         array.push(data)
    //     });
    //     stDocumentt(array)
    //     console.log(documents)
    // }
    // useEffect(() => {
    //     readDate()
    // }, [])
    // const handledelet = async (id) => {
    //     await deleteDoc(doc(firestore, "Students Attendance", id))
    // }
 




   
    return (
        <>
        <h2 className="text-center m-5"><b>Added Student</b></h2>
            <div className="table-responsive d-flex justify-content-center">

                <table className="table w-50 mb-5">

                    <thead>

                        <th>
                            sr.NO
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {documents.map((doc, i) => {
                            return (
                                <>

                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <th>{doc.name}</th>
                                        <th>{doc.PhoneNumber}</th>
                                        <th>{doc.country}</th>
                                        <button onClick={() => {
                                            handledelete(doc.id)
                                        }}>Delete</button>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        {/* <h2 className="text-center m-5"><ul><b>Courses</b></ul></h2>
            <div className="table-responsive d-flex justify-content-center">

                <table className="table w-50">

                    <thead>

                        <th>
                            sr.NO
                        </th>
                        <th>Name</th>
                      
                    </thead>
                    <tbody>
                        {documents.map((docs, i) => {
                            return (
                                <>

                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <th>{docs.coursename}</th>
                         
                                        <button onClick={() => {
                                            handledelet(docs.id)
                                        }}>Delete</button>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>

                </table>
            </div> */}
         
        {/* <h2 className="text-center m-5"><b>Students Attendance</b></h2>
            <div className="table-responsive d-flex justify-content-center">

                <table className="table w-50">

                    <thead>

                        <th>
                            sr.NO
                        </th>
                        <th>Name</th>
                        <th>Roll</th>
                      
                    </thead>
                    <tbody>
                        {documentt.map((docss, i) => {
                            return (
                                <>

                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <th>{docss.stuname}</th>
                                        <th>{docss.roll}</th>
                         
                                        <button onClick={() => {
                                            handledelett(docss.id)
                                        }}>Delete</button>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>

                </table>
            </div> */}
         
        </>

    )
}
export default Getdata;

