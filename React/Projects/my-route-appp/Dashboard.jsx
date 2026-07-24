import { useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const location = useLocation();

  const users = JSON.parse(localStorage.getItem('usr'))


  console.log("dash : " , location)


  return (
    <div>
      <h2>Welcome to Dashboard : {users.role.toUpperCase()}</h2>

      <h3>name : {users.name}</h3>
      <h3>role : {users.role}</h3>
      <h3>email : {users.email}</h3>


      {/* 
         
         <h3>name : {location.state.users.name}</h3>
         <h3>role : {location.state.users.role}</h3>
         <h3>email : {location.state.users.email}</h3> 
         
         */}


    </div>
  )
}

export default Dashboard
