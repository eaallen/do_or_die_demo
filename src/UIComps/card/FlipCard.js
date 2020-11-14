import React from 'react'
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import {Card, CardBack } from './Card';

export default function FlipCard(props) {
    const [name, setName] = React.useState(true)
    return <div className="flip-card">
        <div className={name ? 'flip-card-inner' : 'flip-card-animate'}>
            <div className="flip-card-front" onClick={x => setName(!name)}>
                <Card/>
            </div>
            <div className="flip-card-back">
                <CardBack/>
                <div className="flip-btn" onClick={x => setName(!name)}>
                    <FontIcon iconName="NavigateForwardMirrored" className="flip-btn" />
                </div>
            </div>
        </div>
    </div>
}