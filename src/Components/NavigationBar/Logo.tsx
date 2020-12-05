import React from 'react'
import MLogo from './millburn_logo.png'
export default function Logo() {
    return (
        <div style={{ flex: 1,padding: 0, margin:0 }} >
            <img alt="millburn robotics logo" height={60} style={{padding: "0px 0px 0px 20px", margin:"20px 0px 20px 20px"}}  src={MLogo}/>
        </div>
    )
}