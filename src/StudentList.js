import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function StudentList() {

    const [slist, setslist] = useState([])

    useEffect(async () => {
        try {
            let sdata = await fetch('https://61c19a1d9dbcca0017c81fce.mockapi.io/students')
            let jsdata = await sdata.json()
            setslist(jsdata)

        } catch (error) {
            console.log(error)
        }


    }, [])

    return (
        <>
            <div class="container-fluid">

                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Student List</h1>
                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Student List</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Avatar</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Avatar</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        slist.map((obj, index) => {
                                            return <tr key={index}>
                                                <td>{obj.name}</td>
                                                <td><img src={obj.avatar}></img> </td>
                                                <td><Link to={`/student-list/${obj.id}`}><button className='btn btn-primary'>View</button></Link>
                                                </td>
                                            </tr>
                                        })
                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default StudentList
