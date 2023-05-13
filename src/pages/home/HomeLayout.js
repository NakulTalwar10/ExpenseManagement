import React from 'react'
import Home from './Home'
import { GlobalStyle } from '../../styles/GlocbalStyle';
import { GlobalProvider } from '../../context/globalContext';
const HomeLayout = () => {
    return (
        <div>
            <GlobalStyle />
            <GlobalProvider>
                <Home />
            </GlobalProvider>
        </div>
    )
}

export default HomeLayout