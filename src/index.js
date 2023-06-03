import React from 'react'
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

function Greeting() {
    return <h1> Hola mundo 2</h1>

}
root.render(Greeting())