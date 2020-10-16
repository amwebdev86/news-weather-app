import React from 'react'
import contanerStyles from "./container.module.css"

export default function Container({ children }) {
    return (
        
        <div className={contanerStyles.container}>
        <h3>MyAPI</h3>    
            {children}
        </div>
    )
}