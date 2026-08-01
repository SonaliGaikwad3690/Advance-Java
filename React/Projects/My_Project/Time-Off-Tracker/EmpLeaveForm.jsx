import React, { useState, useEffect } from 'react';
import { addLeave, updateLeave } from './apiServices';
const EmpLeaveForm = ({ edit, setEdit, refresh }) => {
    const [form,setForm]=useState({
        employeeName: '',
        leaveDate: '',
        reason: '',
        status: ''
    });

    useEffect(() => {
        if(edit) {
            setForm(edit);
        }
    }, [edit]);

    const handleChange=(e)=>{
        const{name , value}=e.target;
            setForm({...form,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(edit){
            await updateLeave(edit.id,form);

        }else{
            await addLeave(form);
        }
        setForm({
            employeeName: '',
            leaveDate: '',
            reason: '',
            status: ''
        });
        setEdit(null);
        refresh();
    }
    return (
        <div>
            <center>
                <h1>Leave Form</h1>
                <h2>{edit ? 'Edit Leave' : 'Add Leave'}</h2>
                <form onSubmit={handleSubmit}>

                    EmployeeName: <input type="text" name="employeeName" value={form.employeeName} onChange={handleChange} required /><br />
                    LeaveDate: <input type="date" name="leaveDate" value={form.leaveDate} onChange={handleChange} required /><br />
                    Reason: <input type="text" name="reason" value={form.reason} onChange={handleChange} required /><br />
                    Status: <input type="text" name="status" value={form.status} onChange={handleChange} required /><br />
                    <button type="submit">{edit ? 'Update' : 'Submit'}</button>
                </form>
            </center>
            </div>
    )
}
export default EmpLeaveForm
