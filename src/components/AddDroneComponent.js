import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DroneService from '../services/DroneService'

const AddDroneComponent = () => {
    const [drones, setDrones] = useState([])

    const [flightId, setFlightId] = useState('')
    const [activity, setActivity] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [lightLevel, setLightLevel] = useState('')
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        DroneService.getDroneById(id).then((response) => {
            const { flightId, activity, releaseDate, lightLevel } = response.data.list[0]; // Lấy phần tử đầu tiên trong mảng
            setFlightId(flightId);
            setActivity(activity);
            setReleaseDate(releaseDate);
            setLightLevel(lightLevel);
        }).catch(error => {
            console.log(error);
        });
    }, []);


    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Drone</h2>
        } else {
            return <h2 className="text-center">Add Drone</h2>
        }
    }

    const saveOrUpdateDrone = (e) => {
        e.preventDefault();
        if (id) {
            const drone = { id, flightId, activity, releaseDate, lightLevel }
            DroneService.updateDrone(drone).then((response) => {
                history('/drone');
            }).catch(error =>{
                console.log(error);
            })
        } else {
            const drone = { flightId, activity, releaseDate, lightLevel }
            DroneService.createDrone(drone).then((response) => {
                console.log(response.data)
                history('/drone');
            }).catch(error => {
                console.log(error)
            })
        }

    }

    return (
        <div>
            <br /><br />
            <div className="container" style={{ flexGrow: 1 }}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                {/* <div className="form-group mb-2">
                                    <label className="form-label"> Flight Id :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter flight id"
                                        name="flightId"
                                        className="form-control"
                                        value={flightId}
                                        onChange={(e) => setFlightId(e.target.value)}
                                    >
                                    </input>
                                </div> */}

                                <div className="form-group mb-2">
                                    <label className="form-label"> Activity :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter activity"
                                        name="activity"
                                        className="form-control"
                                        value={activity}
                                        onChange={(e) => setActivity(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Release date :</label>
                                    <input
                                        type="date"
                                        placeholder="Enter release date"
                                        name="releaseDate"
                                        className="form-control"
                                        value={releaseDate}
                                        onChange={(e) => setReleaseDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Light level :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter light level"
                                        name="lightLevel"
                                        className="form-control"
                                        value={lightLevel}
                                        onChange={(e) => setLightLevel(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateDrone(e)} >Submit </button>
                                <Link to="/drone" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddDroneComponent
