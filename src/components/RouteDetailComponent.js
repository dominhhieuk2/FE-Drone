// RouteDetailComponent.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRouteById } from '../services/RouteService';

const RouteDetailComponent = () => {
  const { id } = useParams();
  const [route, setRoute] = useState(null);

  useEffect(() => {
    fetchRoute();
  }, []);

  const fetchRoute = async () => {
    try {
      const response = await getRouteById(id);
      setRoute(response.data);
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  return (
    <div>
      {route ? (
        <>
          <h2>Route: {route.RouteName}</h2>
          <ul>
            {route.Checkpoints.map((checkpoint) => (
              <li key={checkpoint.CheckpointID}>
                {checkpoint.CheckpointName}, Rotation: {checkpoint.Rotation}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Link to={`/edit-route/${id}`}>Edit Route</Link>
    </div>
  );
};

export default RouteDetailComponent;
