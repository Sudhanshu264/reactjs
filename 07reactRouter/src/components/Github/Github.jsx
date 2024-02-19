import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'




function Github() {

    const data = useLoaderData()


    // const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/Sudhanshukumar')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
        <div className='text-center m-4 bg-gray-500 text-white text-3xl'>

            Github Id: {data.id} 
        </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Sudhanshukumar')
    return response.json()
}
