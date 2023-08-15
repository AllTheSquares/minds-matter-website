// import {useState} from 'react'
import TopNav from "./mm-navbar.jsx";
import './App.css'


function App() {
    return (
        <>
            <div>
                <TopNav/>
            </div>
            <div className="page-title">
                <h1>MINDS MATTER</h1>
                <h2>The Resource Bureau for Education and Mental Health Support</h2>
            </div>
            <hr/>

            <div className="page-slogan">
                <h3>&ldquo;When your mental health declines, so do your academics and when your academics decline, so
                    does your mental health.&rdquo;</h3>
            </div>
            <hr/>

            <div className="our-mission">
                <h3>OUR MISSION</h3>
                <p>Our mission is to provide students from under-resourced communities with a site to rely on for
                    educational and mental health resources. It is our goal to contribute to helping bridge the
                    educational gap by making resources more accessible to everyone.</p>
            </div>
            <hr/>
            <div className="resources">
                <h3>RESOURCES</h3>
            </div>
        </>
    )
}

export default App
