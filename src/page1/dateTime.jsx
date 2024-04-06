import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='flex justify-between space-x-32'>
            <p> Time : {date.toLocaleTimeString()} </p>
            <p> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime