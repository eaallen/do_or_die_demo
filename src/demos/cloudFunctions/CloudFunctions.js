import React from 'react'
import axios from 'axios'
export default function CloudFunctions(){
    const[data,setData] = React.useState(null)
    const obj ={
        title:'this will be good!',
        desc:'You\'re going to regret it either way.',
        img:'',
        votes:0,
    }
    const vote ={
        id:"4dcXx2zIeMU2Q0SNiy1w",
        vote:1
    }
    const getData = async() =>{
        const data = await axios.get("http://localhost:5001/doordiedemo/us-central1/getPie")
        setData(data.data.result)
    }
    return<div>
        <h1>
            Welcome to the Cloud Function tester!
        </h1>
        <button className='btn btn-dark' onClick={x=>{axios.get("http://localhost:5001/doordiedemo/us-central1/addPie?text="+encodeURIComponent(JSON.stringify(obj)))}}>Test functino</button>
        <br/>
        <button className='btn btn-light' onClick={x=>{axios.get("http://localhost:5001/doordiedemo/us-central1/votePie?text="+encodeURIComponent(JSON.stringify(vote)))}}>
            Test up vote (4dcXx2zIeMU2Q0SNiy1w)
        </button>
        <br/>
        <button className='btn btn-success' onClick={getData}>
            get data
        </button>
        {!data?null:<div>
            we have data    
            {data.map(x=>{
                return Object.values(x).map((item,idx)=>{
                    return <div key={idx}>{item}</div>
                })
            })}
        </div>}
    </div>
} 