console.log("Hello JS");

// map :

let arr = [1, 2, 3, 4, 5];

// [1,4,9,16,25]

let sqr1 = [];

for (let i in arr) {
  console.log(arr[i]);
  sqr1[i] = arr[i] * arr[i];
}
console.log(sqr1);

let sqr2 = arr.map((num) => num * num); //

console.log("sqr2 : ", sqr2);

let sqr3 = arr.map((num) => { 

  console.log("sqr3 : ", num);

  return num ; 

});

console.log(sqr3)

let arr2 = [1,2,3,4,5,6]

let even = arr2.map((num) => num % 2 === 0 )

console.log("even arr : " , even)

let filterEven = arr2.filter((num) => num % 2 === 0 )

console.log("filter Even : " , filterEven)

let employees = [
  {
    id: 101,
    name: "Rohit Sharma",
    department: "Java",
    salary: 50000,
    city: "Pune"
  },
  {
    id: 102,
    name: "Virat Kohli",
    department: "Python",
    salary: 55000,
    city: "Mumbai"
  },
  {
    id: 103,
    name: "Hardik Pandya",
    department: "React",
    salary: 60000,
    city: "Nagpur"
  },
  {
    id: 104,
    name: "KL Rahul",
    department: "Testing",
    salary: 45000,
    city: "Nashik"
  },
  {
    id: 105,
    name: "Jasprit Bumrah",
    department: "DevOps",
    salary: 65000,
    city: "Pimpri-Chinchwad"
  }
];


let allemps = employees.map((emp) =>  {

    if(emp.department === "React"){

         emp.salary += 12000 ;
         
         return emp ; 
    }
    return emp ; 
})

console.log(allemps)


let  deleteId = 104 ; 


let newEmps = allemps.filter((emp) => emp.id !== deleteId )

employees = newEmps ; 

console.log("employees : " , employees)

// create a list of 10 employees with different data ; 

// modify the list contains only react devs 

// modify the list where if salary < 20000 , give hike of 15%

// modify the list in case where salary digit count > 5 digit

// collect all the info & sample example of map & filter 

// how it works with sinle value & objects
