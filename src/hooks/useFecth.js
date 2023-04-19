import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useFecth = (url) => {

    const [Api, setApi] = useState()
    const [CapErr, setCapErr] = useState(false)

    useEffect(() => {
     axios.get(url)
     .then(res => {
        setApi(res.data)
        setCapErr(false)
    })
     .catch(err =>{
        console.log(err)
        setCapErr(true)
     })
     
    }, [url])
    

    return [Api, CapErr]
}

export default useFecth