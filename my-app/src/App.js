import React from 'react'

import Header from './header'
import Content from './content'
import ImageContent from './image-content'

/* CSS */
import './App.css'

const App = () => {
    return (
        <div className = "app-main" >
            <Header />
            <ImageContent />
            <Content />
        </div>
    )

}

export default App