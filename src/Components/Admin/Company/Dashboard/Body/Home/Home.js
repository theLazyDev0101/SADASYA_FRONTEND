import * as React from 'react'
import './Home.css'
import '../../Header/Header.css'
import Header from '../../Header/Header'
export default function Home() {
    return (
        <>
            <Header />
            <section class="home-section">
                <div class="text">Dashboard</div>
            </section>
            <h1>Hello World</h1>
        </>
    )
}