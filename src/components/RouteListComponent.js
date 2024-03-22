// RouteListComponent.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRoutes, deleteRoute } from '../services/RouteService';

const RouteListComponent = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await getAllRoutes();
      setRoutes(response.data);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const handleDelete = async (routeId) => {
    try {
      await deleteRoute(routeId);
      fetchRoutes();
    } catch (error) {
      console.error('Error deleting route:', error);
    }
  };

  return (
    <div>
      <h2>Routes</h2>
      <ul>
        {routes.map((route) => (
          <li key={route.RouteID}>
            <Link to={`/routes/${route.RouteID}`}>{route.RouteName}</Link>
            <button onClick={() => handleDelete(route.RouteID)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add-route">Add Route</Link>
    </div>
  );
};

export default RouteListComponent;
