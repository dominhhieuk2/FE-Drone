// RouteService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const getAllRoutes = async () => {
  return await axios.get(`${BASE_URL}/fetch-data/Routes`);
};

export const getRouteById = async (id) => {
  return await axios.get(`${BASE_URL}/fetch-data/Routes/${id}`);
};

export const addRoute = async (route) => {
  return await axios.post(`${BASE_URL}/add-data/Routes`, route);
};

export const updateRoute = async (id, newData) => {
  return await axios.put(`${BASE_URL}/update-data/Routes/${id}`, newData);
};

export const deleteRoute = async (id) => {
  return await axios.delete(`${BASE_URL}/delete-data/Routes/${id}`);
};
