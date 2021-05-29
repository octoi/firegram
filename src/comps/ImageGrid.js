import React from 'react';
import useFirestore from '../hooks/useFirestore';

export default function ImageGrid() {
    const { docs } = useFirestore("images");
    console.log(docs)

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div key={doc.id} className="img-wrap">
                    <img src={doc.url} alt={doc.id} />
                </div>
            ))}
        </div>
    )
}