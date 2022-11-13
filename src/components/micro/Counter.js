import React, {useState} from 'react'

export default function Counter() {
    const [index, set_index] = useState(0)

    const increment_number = () =>{
        set_index(index + 1)
    }

    return (
        <div className='counter-container'>
            <h1>{index}</h1>
            <button onClick={increment_number}>Click</button>
        </div>
    )
}
