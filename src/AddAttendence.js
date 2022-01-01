import { useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'

function AddAttendence() {
    let params = useParams()
    console.log(params)
    const formik = useFormik({
        initialValues:{
            attendence:"",
            date:"",
            studentid: params.id,
        },
        onSubmit:async(values)=>{
             try {
                 await fetch('https://61c19a1d9dbcca0017c81fce.mockapi.io/attendence',{
                     method:"POST",
                     body: JSON.stringify(values),
                     headers:{
                         "content-type":"application/json"
                     }
                 })
                 alert("attendence added")
                 console.log(values)
                }
                 

             catch (error) {
                    console.log(error)
             }
        }
    })
    return (
        <>


            <div class="container-fluid">

                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Add Attendence</h1>

                </div>
            </div>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <select className='form-control' onChange={formik.handleChange} 
                        value={formik.values.attendence}
                        name="attendence">
                            <option value="present"> Present</option>
                            <option value="absent">Absent</option>
                        </select>
                    </div>
                    <div className='col-lg-6'>
                        <input className='form-control' type="date" onChange={formik.handleChange} 
                        value={formik.values.date}
                        name="date"></input>
                    </div>
                    <div className='col-lg-6'>
                    <input className='btn btn-primary mt-3' type="submit"></input>
                    </div>
                </div>
                </form>

            </div>


        </>
    )
}

export default AddAttendence
