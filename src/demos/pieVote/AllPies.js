import React from 'react'
import { Card, FlipCard } from '../../UIComps/card'

export default function AllPies() {
    const cards = [1, 2, 3, 4]
    return <div className="text-center">
        <div>
        </div>
        
        <div id="pies">
            {cards.map(x => {
                return <div className="row" key={x}>
                    <div className="col-sm-8 mx-auto mb-5">
                        <Card title={`title: ${x}`}/>
                    </div>
                </div>
            })}
        </div>
    </div>
}