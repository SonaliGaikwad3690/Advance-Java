import axios from "axios";

const BASE_URL = "http://localhost:8080/students";

// Get All Students
export const showAllStudents = () => axios.get(BASE_URL);

// Add Student
export const addStudent = (std) => axios.post(BASE_URL, std);

// Delete Student
export const deleteById = (id) => axios.delete(`${BASE_URL}/${id}`);

// Update Student
export const updateStudent = (id, std) =>
  axios.put(`${BASE_URL}/${id}`, std);
