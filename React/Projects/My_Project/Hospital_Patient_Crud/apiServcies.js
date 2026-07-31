import axios from "axios";

const BASE_URL = "http://localhost:8080/patients";

export const showAllPatient = () => axios.get(BASE_URL);

export const addPatient = (patient) => {
  return axios.post(`${BASE_URL}/register`, patient);
};
export const updatePatient = (id, patient) =>
  axios.put(`${BASE_URL}/${id}`, patient);

export const deleteById = (id) =>
  axios.delete(`${BASE_URL}/${id}`);
