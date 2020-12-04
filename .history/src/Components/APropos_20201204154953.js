import React from 'react'

// vu que ça return juste du texte et pas de state/props, on peut juste faire un function component 

export default function APropos() {
    return (
        <div>
            <h3 className="display-3 light-gray">À propos...</h3>
            <p className="lead">Petite interface pour tester React & Bootstrap !</p>
        </div>
    )
}
