import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DroneService from '../services/DroneService';

const ListDroneComponent = () => {
    const [drones, setDrones] = useState([]);
    useEffect(() => {
        DroneService.getAllDrones().then(response => {
            setDrones(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center'>List Drone Flight</h2>
            <Link to = "/add-drone" className="btn btn-primary mb-2"> Add drone flight </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Drone flight id</th>
                        <th>Activity</th>
                        <th>Release date</th>
                        <th>Light level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {drones.map(drone =>
                        <tr key={drone.flightId}>
                            <td>{drone.flightId}</td>
                            <td>{drone.activity}</td>
                            <td>{drone.releaseDate}</td>
                            <td>{drone.lightLevel}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-drone/${drone._id}`}>Update</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListDroneComponent;
