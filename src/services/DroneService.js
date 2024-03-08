import axios from 'axios'

const DRONE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/drones';

class DroneService{

    getAllDrones(){
        return axios.get(DRONE_BASE_REST_API_URL)
    }

    createDrone(drone){
        return axios.post(DRONE_BASE_REST_API_URL, drone)
    }

    getDroneById(flightId){
        return axios.get(DRONE_BASE_REST_API_URL + '/' + flightId);
    }

    updateDrone(flightId, drone){
        return axios.put(DRONE_BASE_REST_API_URL + '/' +flightId, drone);
    }

    deleteDrone(flightId){
        return axios.delete(DRONE_BASE_REST_API_URL + '/' + flightId);
    }

    static getStringId(drone) {
        return drone.id.$oid; // Assuming the id is in the format { "$oid": "id_value" }
    }
}

export default new DroneService();