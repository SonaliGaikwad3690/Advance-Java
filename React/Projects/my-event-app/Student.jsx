import React, { useState } from 'react'

const Student = () => {

    let [stdname, setStdname] = useState('');
    let [show, setShow] = useState(null);


    const handleStdname = (e) => {

        setStdname(e.target.value) ; 

        setShow(true)

    }

    return (
        <div>

            enter stdname : <input type="text" onChange={handleStdname} />

            {
                show &&
                <h2>std name : {stdname}</h2>
            }

        </div>
    )
}

export default Student
