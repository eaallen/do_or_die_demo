import React from 'react'

export default function Card(props){
    const title = props.title || "Title"
    const desc = props.desc || 'Lorem Ioosum sit amit vudo uefaitinga Lorem Ioosum sit amit vudo uefaitinga'
    return<div className="card text-left">
        <div className="card-image">
            <img src='' alt=''></img>
        </div>
        <div className="card-title">
            <h2>
                {title}
            </h2>
        </div>
        <div className="card-desc">
            <p>{desc}</p>
        </div>
    </div>
}