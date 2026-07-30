import axios from "axios";

const BASE_URL = "http://localhost:8080/employees";

// Get All Students
export const showAllEmployees = () => axios.get(BASE_URL);

// Add Student
export const addEmp = (emp) => axios.post(BASE_URL, emp);

// Delete Student
export const deleteById = (id) => axios.delete(`${BASE_URL}/${id}`);

// Update Student
export const updateEmployee = (id, emp) =>axios.put(`${BASE_URL}/${id}`, emp);
