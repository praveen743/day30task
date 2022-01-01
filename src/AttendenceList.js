import React from 'react'
import { Link, useParams } from 'react-router-dom'

function AttendenceList() {
    let params = useParams()
    
    return (
        <>
            <div class="container-fluid">

                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Attendence List</h1>
                    <Link to={`/add-attendence/${params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        class="fas fa-download fa-sm text-white-50"></i> Add Attendence</Link>
                </div>
                
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Attendence List</h6>
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

                                    <tr>

                                    </tr>




                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default AttendenceList
