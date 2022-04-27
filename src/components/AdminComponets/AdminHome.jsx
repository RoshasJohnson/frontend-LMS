import React from 'react'
import Header from '../Header';
import './AdminHome.css'
import { Table } from 'react-bootstrap';

function AdminHome() {
    console.log(
        'blhh'
    );
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='adminHeader'>
                    <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
        </div>
    </div>
  )
}

export default AdminHome
