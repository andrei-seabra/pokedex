import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

export function Details() {
    return (
        <>
        <Header />
        <div className="container">
            <h1 className='title'>Pokemon</h1>
        </div>
        <Footer />
        </>
    )
}