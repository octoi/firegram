import React from 'react';

export default function Modal({ selectedImg, setSelectedImg }) {
    return (
        <div className="backdrop" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt='enlarged pic' />
        </div>
    )
}
