import axios from "axios";

const BASE_URL = "http://localhost:8081/employees";

// Get All Employees
export const showAllEmployees = () => axios.get(BASE_URL);

// Add Employee
export const addEmployees = (emp) => axios.post(BASE_URL, emp);

// Delete Employee
export const deleteById = (id) => axios.delete(`${BASE_URL}/${id}`);

// Update Employee
export const updateEmployees = (id, emp) => axios.put(`${BASE_URL}/${id}`, emp);
