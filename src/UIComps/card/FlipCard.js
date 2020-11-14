import React from 'react'

export default function FlipCard() {
    const [name, setName] = React.useState(true)
    return <div className="flip-card">
        <div className={name ? 'flip-card-inner' : 'flip-card-animate'}>
            <div className="flip-card-front">
                <img src="img_avatar.png" alt="Avatar" />
                <div className="flip-btn" onClick={x => setName(!name)}>
                    flip me
                </div>
            </div>
            <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
                <div className="flip-btn" onClick={x => setName(!name)}>
                    flip me
                </div>
            </div>
        </div>
    </div>
}