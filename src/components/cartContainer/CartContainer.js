import React from 'react'

export default function CartContainer({children, show}) {
    return (
        
        <div className='inside-style'>
            {show &&

                <p>Hola mundo</p>
            }
        </div>
    )
}
