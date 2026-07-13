import React from 'react';
const ShowAllEmployee = ({ allemps ,deleteById }) => {


    return (
        <div>
            <center>
            <h1>Show All Employee</h1>

            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allemps.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.salary}</td>
                            
                            <td>
                                <button onClick={() => deleteById(e.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
             </center>

        </div>
    );
};
export default ShowAllEmployee;
