import React from 'react'
import axios from 'axios'
export default function CloudFunctions(){
    const obj ={
        title:'PIE OR CRY',
        desc:'You\'re going to regret it either way.',
        img:'',
        votes:0,
    }
    const vote ={
        id:"GSnDCGg9PUdf4A3BsrQc",
        vote:1
    }
    return<div>
        <h1>
            Welcome to the Cloud Function tester!
        </h1>
        <button className='btn btn-dark' onClick={x=>{axios.get("http://localhost:5001/doordiedemo/us-central1/addPie?text="+encodeURIComponent(JSON.stringify(obj)))}}>Test functino</button>
        <br/>
        <button className='btn btn-light' onClick={x=>{axios.get("http://localhost:5001/doordiedemo/us-central1/votePie?text="+encodeURIComponent(JSON.stringify(vote)))}}>
            Test up vote (GSnDCGg9PUdf4A3BsrQc)
        </button>
    </div>
} 