export let employees = [
  { id: 101, name: "raj", role: "dev", salary: 123456 },
  { id: 102, name: "tina", role: "dev", salary: 123456 },
  { id: 103, name: "jay", role: "dev", salary: 123456 },
];

export const showAllEmployees = () => employees;

export const addEmployee = (emp) => {
  employees = [...employees, emp];
};

export const deleteById = (id) => {
  const newList = employees.filter((e) => e.id != id);
  employees = newList;
};

export const updateEmployee = (id , emp) => {
  const newList = employees.filter((e) => e.id != id);
  employees = [...newList , emp]
};
