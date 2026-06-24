console.log("Start")

// const greet = () => {

//     console.log("hello everyone...")

// }
// // 

// // setTimeout(function , time )


// setTimeout(greet , 2000)  // 2 sec


// console.log("End")


// let clt = setTimeout(()=>{
  
//     console.log("i am in setTImeout..")
    
// } , 3000)


// clearTimeout(clt)

// setInterval

let count = 0 ; 

const hello = () => {
    count++ ; 
   console.log("hello interval... " , count) 
}

let id = setInterval(()=>{

    hello() ; 

    if (count === 10) {
    clearInterval(id)
}

} , 1000)  



console.log("End")
