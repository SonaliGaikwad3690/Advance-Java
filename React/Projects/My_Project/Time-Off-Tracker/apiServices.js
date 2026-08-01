import axios from "axios";

const BASE_URL = "http://localhost:8080/leaves";

export const showAllLeave = () => axios.get(BASE_URL);

export const addLeave = (data) => axios.post(BASE_URL, data);

export const updateLeave = (id, data) =>
  axios.put(`${BASE_URL}/${id}`, data);

export const deleteLeave = (id) =>
  axios.delete(`${BASE_URL}/${id}`);
