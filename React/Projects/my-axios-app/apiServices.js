// employees

import axios from "axios";

// export const showAllEmployees = () => {
//     return axios.get(`http://localhost:8080/employees`) ; 
// }

export const showAllEmployees = () => axios.get(`http://localhost:8080/employees`) ; 

export const addEmployees = (emp) => axios.post(`http://localhost:8080/employees`  , emp) ; 
