import React from 'react'

function Card(props) {
    const title = props.title || "Title"
    const desc = props.desc || 'Lorem Ioosum sit amit vudo uefaitinga Lorem Ioosum sit amit vudo uefaitinga'
    const img = props.img || "/img/pietestjpg.jpg"
    return <div className="card text-left container">
        <div className="row card-image text-center">
            <div className="">
                <img src={img} alt='pi' />
            </div>
        </div>
        <div className="row card-title">
            <div>
                <h2>{title}</h2>
            </div>
        </div>
        <div className="row card-desc">
            <div>
                <p>{desc}</p>
            </div>
        </div>
    </div>
}

function CardBack(props){
    const title = props.title || "Title"
    const desc = props.desc || 'Vote for ' + title +'?'
    const img = props.img || "/img/pietestjpg.jpg"
    return <div className="card text-left container">
        <div className="row card-image text-center">
            <h2 className="diaplay-2">
                {desc}
            </h2>
        </div>
        <div className="row card-title">
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    </div>   
}

export{Card,CardBack}