import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DroneService from '../services/DroneService';

const ListDroneComponent = () => {
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        getAllDrones();
    }, []);

    const getAllDrones = () => {
        DroneService.getAllDrones().then(response => {
            setDrones(response.data.list);
        }).catch(error => {
            console.log(error);
        });
    }

    const deleteDrone = (droneId) => {
        DroneService.deleteDrone(droneId).then((response) => {
            getAllDrones();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Drone Flight</h2>
            <Link to="/add-drone" className="btn btn-primary mb-2">Add drone flight</Link>
            <Link to="/show-data-realtime" style={{marginLeft:"10px"}} className="btn btn-primary mb-2">Show data realtime</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        {/* <th>Drone flight id</th> */}
                        <th>Activity</th>
                        <th>Release date</th>
                        <th>Light level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {drones.map(drone =>
                        <tr key={drone.id}>
                            {/* <td>{drone.flightId}</td> */}
                            <td>{drone.activity}</td>
                            <td>{drone.releaseDate}</td>
                            <td>{drone.lightLevel}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-drone/${drone.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={() => deleteDrone(drone.id)}
                                style={{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListDroneComponent;
