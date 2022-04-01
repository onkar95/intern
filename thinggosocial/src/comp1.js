import React, { useEffect, useState } from 'react'

const comp1 = () => {
    const[countA,setCountA]=useState(1)
    const[countB,setCountB]=useState(1)
    const[countC,setCountC]=useState(1)
    const [countD, setCountD] = useState(1)
    
   
    useEffect(() => {
       let interval= setInterval(() => {
            // setCountA(prev => prev+1)
            // setCountB(prev => prev+1)
            // setCountC(prev => prev+1)
            // setCountD(prev => prev+1)
        }, 1);
    },[])
    
    return (
        <div>
            <div>
                {countA}
            </div>
            <div>
                {countB}
            </div>
            <div>

                {countC}
            </div>
                {countD}
        </div>
    )
}

export default comp1
