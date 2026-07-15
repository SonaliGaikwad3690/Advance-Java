import React from 'react'

const ShowData = ({allemps , deleteById}) => {
  return (
    <div>
      
      <h2>
        All Data
      </h2>

      <table border='2'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ROLE</th>
                <th>SALARY</th>
                <th>ACTIONS</th>
            </tr>
        </thead>

        <tbody>
            {
                allemps.map((e)=>(
                    <tr key={e.id}>
                        <td>{e.id}</td> 
                        <td>{e.name}</td> 
                        <td>{e.role}</td> 
                        <td>{e.salary}</td> 
                        <td>
                            <button onClick={()=> deleteById(e.id)}>
                                Delete
                            </button>
                            </td> 
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default ShowData
